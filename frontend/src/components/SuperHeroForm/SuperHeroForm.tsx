import { useState } from 'react';
import axios from 'axios';
import useSuperHeroStore from '@stores/useSuperHeroStore';
import useDarkModeStore from '@stores/useDarkModeStore';
import { FormContainer, Input, Button, ErrorMessage } from '@components/SuperHeroForm/styles/SuperHeroFormStyles';

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
        {isLoading ? 'Creating...' : success ? 'Success!' : 'Create Superhero'}
      </Button>
    </FormContainer>
  );
};

export default SuperHeroForm;