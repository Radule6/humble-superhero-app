import { useEffect } from 'react';
import useSuperHeroStore from '@stores/useSuperHeroStore';
import useDarkModeStore from '@stores/useDarkModeStore';
import { ListContainer, HeroCard, HeroName, HeroPower, HumilityScore, LoadingMessage } from '@components/SuperHeroList/styles/SuperHeroListStyles';


const SuperHeroList = () => {
  const { darkMode } = useDarkModeStore();
  const { superheroes, isLoading, fetchSuperheroes } = useSuperHeroStore();

  useEffect(() => {
    fetchSuperheroes();
  }, [fetchSuperheroes]);

  if (isLoading) {
    return <LoadingMessage>Loading superheroes...</LoadingMessage>;
  }

  return (
    <ListContainer $darkMode={darkMode}>
      {superheroes.map((hero) => (
        <HeroCard key={hero.id} $darkMode={darkMode}>
          <HeroName>{hero.name}</HeroName>
          <HeroPower>Superpower: {hero.superpower}</HeroPower>
          <HumilityScore>Humility Score: {hero.humilityScore}</HumilityScore>
        </HeroCard>
      ))}
      {superheroes.length === 0 && (
        <h3>No superheroes found. Be the first to add one!</h3>
      )}
    </ListContainer>
  );
};

export default SuperHeroList;
