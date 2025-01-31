import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useSuperHeroStore from '@stores/useSuperHeroStore';
import useDarkModeStore from '@stores/useDarkModeStore';

const FormContainer = styled.form<{ $darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: ${({ $darkMode }) => ($darkMode ? 'var(--card-bg-dark)' : 'white')};
  color: ${({ $darkMode }) => ($darkMode ? '#f8f9fa' : '#333')};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Input = styled.input<{ $darkMode: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${({ $darkMode }) => ($darkMode ? '#4a5568' : '#ddd')};
  border-radius: 4px;
  font-size: 1rem;
  background: ${({ $darkMode }) => ($darkMode ? '#2d3748' : 'white')};
  color: ${({ $darkMode }) => ($darkMode ? '#f8f9fa' : '#333')};
  
  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: ${({ $darkMode }) => ($darkMode ? '#a0aec0' : '#6c757d')};
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0052cc;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SuperHeroForm = () => {
  const { darkMode } = useDarkModeStore();
  const { createSuperhero, isLoading } = useSuperHeroStore();
  const [formData, setFormData] = useState({
    name: '',
    superpower: '',
    humilityScore: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createSuperhero({
        ...formData,
        humilityScore: parseInt(formData.humilityScore)
      });
      
      setSuccess('Superhero successfully created!');
      setFormData({ name: '', superpower: '', humilityScore: '' });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        setError(Array.isArray(err.response.data.message) 
          ? err.response.data.message.join(', ') 
          : err.response.data.message);
      } else {
        setError('Failed to create superhero');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainer onSubmit={handleSubmit} $darkMode={darkMode}>
      <Input
        type="text"
        name="name"
        placeholder="Superhero Name"
        value={formData.name}
        onChange={handleChange}
        required
        minLength={4}
        maxLength={50}
        $darkMode={darkMode}
      />
      
      <Input
        type="text"
        name="superpower"
        placeholder="Superpower"
        value={formData.superpower}
        onChange={handleChange}
        required
        minLength={4}
        maxLength={100}
        $darkMode={darkMode}
      />
      
      <Input
        type="number"
        name="humilityScore"
        placeholder="Humility Score (1-10)"
        value={formData.humilityScore}
        onChange={handleChange}
        required
        min={1}
        max={10}
        $darkMode={darkMode}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Superhero'}
      </Button>
    </FormContainer>
  );
};

export default SuperHeroForm;