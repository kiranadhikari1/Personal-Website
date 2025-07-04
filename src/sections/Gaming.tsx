import React from 'react';
import AimTrainer from './AimTrainer'; // Import the separate AimTrainer component

export default function Gaming() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Steam profile stats (you can update these with real data)
  const steamStats = {
    level: 16,
    gamesOwned: 45,
    yearsOfService: 11,
    achievements: 893,
  };

  // Favorite games with playtime (update with your actual games and hours)
  const favoriteGames = [
    { name: 'Elden Ring', playtime: '117.2 hrs', image: '/Personal-Website/eldenring.png' },
    { name: 'Terraria', playtime: '355.8 hrs', image: '/Personal-Website/terraria.png' },
    { name: 'Cyberpunk 2077', playtime: '34.6 hrs', image: '/Personal-Website/cyberpunk.png' },
    { name: 'Ark: Survival Evovled', playtime: '1352.6 hrs', image: '/Personal-Website/ark.png' },
    { name: 'Dead By Daylight', playtime: '443.3 hrs', image: '/Personal-Website/dbd.png' },
    { name: 'Assassins Creed Origins', playtime: '41.4 hrs', image: '/Personal-Website/aco.png' },
    { name: 'Smite', playtime: '2074.6 hrs', image: '/Personal-Website/smite.png' }
  ];

  // Competitive achievements with images
  const competitiveAchievements = [
    { 
      game: 'Valorant', 
      rank: 'Diamond 3', 
      description: 'Highest Rank Achieved',
      image: '/Personal-Website/valorant.png'
    },
    { 
      game: 'Smite', 
      rank: 'Grandmaster', 
      description: 'Beta Tester',
      image: '/Personal-Website/smite.png'
    },
    { 
      game: 'Marvel Rivals', 
      rank: 'Grandmaster 1', 
      description: 'Highest Rank Achieved',
      image: '/Personal-Website/marvelrivals.png'
    },
  ];

  return (
    <>
      {/* Simple navigation header */}
      <nav className="navbar" role="navigation" aria-label="Gaming navigation">
        <div 
          className="nav-logo"
          style={{ textDecoration: 'none' }}
        >
          Kiran Adhikari
        </div>
        <button 
          className="button secondary"
          style={{ marginLeft: 'auto' }}
          onClick={() => window.history.back()}
        >
          ← Back to Home
        </button>
      </nav>

      <main className="section-container" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        {/* Header Section with Profile and Aim Trainer */}
        <div className="gaming-header" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end',
          gap: '3rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {/* Profile Section */}
          <div style={{ textAlign: 'center' }}>
            <img
              src="/Personal-Website/steampfp.png"
              className="gaming-profile-photo"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--gold, #ffd700)',
                marginBottom: '1rem'
              }}
            />
            <h1 style={{ margin: '0' }}>KingOfGames</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0.5rem 0' }}>
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}>
            <AimTrainer />
          </div>
        </div>

        {/* Steam Profile Stats */}
        <section className="steam-stats" style={{ marginBottom: '3rem' }}>
          <div className="stats-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <div className="stat-card">
              <div className="stat-number">{steamStats.level}</div>
              <div className="stat-label">Steam Level</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{steamStats.gamesOwned}</div>
              <div className="stat-label">Games Owned</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{steamStats.yearsOfService}</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{steamStats.achievements}</div>
              <div className="stat-label">Achievements</div>
            </div>
          </div>
        </section>

        {/* Favorite Games */}
        <section className="favorite-games" style={{ marginBottom: '3rem' }}>
          <h2>Favorite Games</h2>
          <div className="games-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginTop: '1rem'
          }}>
            {favoriteGames.map((game, index) => (
              <div key={index} className="game-card">
                <img
                  src={game.image}
                  alt={game.name}
                  className="game-image"
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0'
                  }}
                />
                <div className="game-info" style={{ padding: '1rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{game.name}</h3>
                  <p style={{ 
                    color: 'var(--gold, #ffd700)', 
                    fontWeight: 'bold',
                    margin: 0
                  }}>
                    {game.playtime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive Achievements */}
        <section className="competitive-section">
          <h2>Competitive Achievements</h2>
          <div className="achievements-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {competitiveAchievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <img
                  src={achievement.image}
                  alt={achievement.game}
                  className="achievement-image"
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0'
                  }}
                />
                <div className="achievement-info" style={{ padding: '1rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--gold, #ffd700)' }}>
                    {achievement.game}
                  </h3>
                  <div className="rank" style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 'bold',
                    margin: '0.5rem 0'
                  }}>
                    {achievement.rank}
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontSize: '0.9rem'
                  }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}