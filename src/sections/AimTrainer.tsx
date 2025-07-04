import React from 'react';

// AimLabs Inspired Aim Trainer Component Mini Game
// This component is a simple aim trainer game where users click on targets that appear randomly.
// The game tracks score, accuracy, and time left, and provides a game over screen with options to play again.
function AimTrainer() {
  const [gameState, setGameState] = React.useState('waiting');
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(60);
  type Target = { id: number; x: number; y: number; spawnTime: number };
  const [targets, setTargets] = React.useState<Target[]>([]);
  const [accuracy, setAccuracy] = React.useState(0);
  const [totalShots, setTotalShots] = React.useState(0);
  const [hits, setHits] = React.useState(0);
  
  const gameRef = React.useRef<HTMLDivElement | null>(null);
  const timerRef = React.useRef<number | undefined>(undefined);
  const spawnRef = React.useRef<number | undefined>(undefined);
  const gameStateRef = React.useRef(gameState);
  
  React.useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);
  
  const TARGET_SIZE = 40;
  const GAME_WIDTH = 320;
  const GAME_HEIGHT = 260;
  
  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(60);
    setTargets([]);
    setTotalShots(0);
    setHits(0);
    setAccuracy(0);
    
    // Start timer
    timerRef.current = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Start spawning targets with a slight delay
    setTimeout(() => {
      spawnTarget();
    }, 500);
  };
  
  const endGame = () => {
    setGameState('gameOver');
    setHighScore(prev => Math.max(prev, score));
    if (timerRef.current !== undefined) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
    if (spawnRef.current !== undefined) {
      clearTimeout(spawnRef.current);
      spawnRef.current = undefined;
    }
  };
  
  const spawnTarget = () => {
    if (gameStateRef.current !== 'playing') return;
    
    const newTarget = {
      id: Date.now() + Math.random(),
      x: Math.random() * (GAME_WIDTH - TARGET_SIZE),
      y: Math.random() * (GAME_HEIGHT - TARGET_SIZE),
      spawnTime: Date.now()
    };
    
    setTargets(prev => [...prev, newTarget]);
    
    // Remove target after 2 seconds if player's aim is trash and cant hit it in time
    setTimeout(() => {
      setTargets(prev => prev.filter(t => t.id !== newTarget.id));
    }, 2000);
    
    // Spawn next target after random delay
    const nextSpawn = Math.random() * 800 + 400;
    spawnRef.current = window.setTimeout(() => {
      spawnTarget();
    }, nextSpawn);
  };
  
  interface HitTargetEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const hitTarget = (targetId: number, event: HitTargetEvent) => {
    event.stopPropagation();
    setTargets((prev) => prev.filter((t) => t.id !== targetId));
    setScore((prev) => prev + 1);
    setHits((prev) => prev + 1);
    setTotalShots((prev) => prev + 1);
  };
  
  interface MissedShotEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const missedShot = (event: MissedShotEvent): void => {
    if (gameState === 'playing') {
      setTotalShots((prev) => prev + 1);
    }
  };
  
  // Calculate accuracy whenever hits or totalShots change
  React.useEffect(() => {
    if (totalShots > 0) {
      setAccuracy(Math.round((hits / totalShots) * 100));
    }
  }, [hits, totalShots]);
  
  React.useEffect(() => {
    return () => {
      if (timerRef.current !== undefined) {
        clearInterval(timerRef.current);
      }
      if (spawnRef.current !== undefined) {
        clearTimeout(spawnRef.current);
      }
    };
  }, []);
  
  return (
    <div style={{
      border: '3px solid #ffd700',
      borderRadius: '10px',
      background: 'linear-gradient(45deg, #1a1a2e, #16213e)',
      width: '320px',
      height: '300px',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'crosshair'
    }} onClick={missedShot}>
      {/* Game Area */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: `${GAME_HEIGHT}px`,
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
      }}>
        {/* Targets */}
        {targets.map((target) => (
          <div
            key={target.id}
            onClick={(e) => hitTarget(target.id, e)}
            style={{
              position: 'absolute',
              left: `${target.x}px`,
              top: `${target.y}px`,
              width: `${TARGET_SIZE}px`,
              height: `${TARGET_SIZE}px`,
              background: 'radial-gradient(circle, #ff4757 0%, #ff3742 70%, #c44569 100%)',
              borderRadius: '50%',
              cursor: 'pointer',
              border: '2px solid #fff',
              boxShadow: '0 0 20px rgba(255, 71, 87, 0.6)',
              animation: 'pulse 0.5s ease-in-out infinite alternate',
              zIndex: 10
            }}
          />
        ))}
        
        {/* Crosshair */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '20px',
          height: '20px',
          pointerEvents: 'none',
          opacity: gameState === 'playing' ? 0.3 : 0,
          zIndex: 5
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '1px',
            background: 'white',
            transform: 'translateY(-50%)'
          }} />
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'white',
            transform: 'translateX(-50%)'
          }} />
        </div>
      </div>
      
      {/* HUD */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '40px',
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        fontSize: '12px',
        color: 'white'
      }}>
        <div>Score: <span style={{ color: '#ffd700' }}>{score}</span></div>
        <div>Time: <span style={{ color: timeLeft <= 10 ? '#ff4757' : '#2ed573' }}>{timeLeft}s</span></div>
        <div>Accuracy: <span style={{ color: accuracy >= 70 ? '#2ed573' : accuracy >= 50 ? '#ffa502' : '#ff4757' }}>{accuracy}%</span></div>
        <div>Best: <span style={{ color: '#ffd700' }}>{highScore}</span></div>
      </div>
      
      {/* Game Over Screen */}
      {gameState === 'gameOver' && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          border: '2px solid #ffd700',
          zIndex: 20
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ffd700' }}>Time's Up!</h3>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>Final Score: {score}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Accuracy: {accuracy}%</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Shots: {totalShots}</p>
          <button 
            onClick={startGame}
            style={{
              background: '#ffd700',
              color: 'black',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '10px'
            }}
          >
            Play Again
          </button>
        </div>
      )}
      
      {/* Start Screen */}
      {gameState === 'waiting' && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          border: '2px solid #ffd700',
          zIndex: 20
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ffd700' }}>Aim Trainer</h3>
          <p style={{ margin: '0 0 15px 0', fontSize: '12px' }}>Click the red orbs as fast as you can!</p>
          <p style={{ margin: '0 0 15px 0', fontSize: '10px' }}>60 seconds • Go for accuracy!</p>
          <button 
            onClick={startGame}
            style={{
              background: '#ffd700',
              color: 'black',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Start Training
          </button>
        </div>
      )}
      
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
    </div>
  );
}

export default AimTrainer;