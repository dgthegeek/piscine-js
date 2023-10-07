async function isWinner(country) {
    try {
        const winnerInfo = await db.getWinner(country);
        
        if (winnerInfo === Error('Country Not Found')) {
            return `${country.name} never was a winner`;
        }
        
        if (winnerInfo.continent !== 'Europe') {
            return `${country.name} is not what we are looking for because of the continent`;
        }
        
        const results = await db.getResults(winnerInfo.id);

        if (results === Error('Results Not Found')) {
            return `${country.name} never was a winner`;
        }
        
        if (results.length < 3) {
            return `${country.name} is not what we are looking for because of the number of times it was champion`;
        }
        
        const winningYears = results.map(result => result.year).join(', ');
        const winningScores = results.map(result => result.score).join(', ');

        return `${country.name} won the FIFA World Cup in ${winningYears} winning by ${winningScores}`;
    } catch (e) {
        if (e.message === 'Country Not Found') {
            return `${country} never was a winner`;
        }
    }
}
