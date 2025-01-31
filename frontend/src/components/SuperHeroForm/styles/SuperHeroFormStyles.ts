import styled from 'styled-components'

export const FormContainer = styled.form<{ $darkMode: boolean }>`
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

export const Input = styled.input<{ $darkMode: boolean }>`
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

export const Button = styled.button`
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

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;