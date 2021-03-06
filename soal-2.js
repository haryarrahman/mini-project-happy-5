// SOAL 2
const matchList = [
    ["mu","city"],
    ["munchen","mu"],
    ["city","munchen"]
]

const resultMatch = [1,0,1]

const generateWinner = () => {
    const match = {
        matchList:matchList,
        resultMatch:resultMatch
    }
    
    const winnerMatch = []
    const win = match.matchList.length -1

    for(i=0; i<=win; i++){
        winnerMatch.push(match.matchList[i][match.resultMatch[i]])
    }

    const matchWin = {};
    var mostWinner = winnerMatch[0], mostmatchWinner = 1;

    for(var j = 0; j < winnerMatch.length; j++)
    {
        var Winner = winnerMatch[j];
        if(matchWin[Winner] == null){
            matchWin[Winner] = 1;
        }
        else{
            matchWin[Winner]++;
        }
        if(matchWin[Winner] > mostmatchWinner)
        {
            mostWinner = Winner;
            mostmatchWinWinner = matchWin[Winner];
        }
    }
    return mostWinner;

}

const winner = generateWinner();