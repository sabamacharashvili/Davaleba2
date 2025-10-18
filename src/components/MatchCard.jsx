import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <h2>{match.league}</h2>
      <p className="match-info">
        {match.date} • {match.time} • {match.stadium}
      </p>

      <div className="teams">
        <div className="team">
          <img src={match.homeLogo} alt={match.homeTeam} />
          <p>{match.homeTeam}</p>
        </div>

        {match.played ? (
          <div className="score">
            {match.homeScore} : {match.awayScore}
          </div>
        ) : (
          <div className="not-played-section">
            <div className="not-played">Upcoming</div>
            <div className="buttons">
              <button className="reminder-btn">Set Reminder</button>
              <button className="calendar-btn">Add to Calendar</button>
            </div>
          </div>
        )}

        <div className="team">
          <img src={match.awayLogo} alt={match.awayTeam} />
          <p>{match.awayTeam}</p>
        </div>
      </div>

      <p className="referee">Referee: {match.referee}</p>
      {match.played && <p className="motm">MOTM: {match.manOfTheMatch}</p>}
    </div>
  );
};

export default MatchCard;
