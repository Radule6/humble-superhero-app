import styled from 'styled-components'

export const AppContainer = styled.div<{ $darkMode: boolean }>`
  background-color: ${({ $darkMode }) => ($darkMode ? 'var(--bg-dark)' : 'var(--bg-light)')};
  color: ${({ $darkMode }) => ($darkMode ? 'var(--text-light)' : 'var(--text-dark)')};
  min-height: 100vh;
`;

