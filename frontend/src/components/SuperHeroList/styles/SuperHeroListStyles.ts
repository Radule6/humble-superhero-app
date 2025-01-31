import styled from 'styled-components'

export const ListContainer = styled.div<{ $darkMode: boolean }>`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroCard = styled.div<{ $darkMode: boolean }>`
  background: ${({ $darkMode }) => ($darkMode ? '#2c3e50' : '#ffffff')};
  color: ${({ $darkMode }) => ($darkMode ? '#ffffff' : '#333333')};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const HeroName = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

export const HeroPower = styled.p`
  margin: 0 0 0.5rem 0;
  color: #666;
`;

export const HumilityScore = styled.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #0066ff;
  color: white;
  border-radius: 4px;
  font-size: 0.875rem;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #dc3545;
  font-size: 1.2rem;
`;