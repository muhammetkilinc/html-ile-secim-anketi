var votes = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  
  function vote(candidate) {
    votes[candidate]++;
    updateResults();
    var candidateElement = document.getElementById('candidate-' + candidate);
  }
  
  function updateResults() {
    var totalVotes = votes.a + votes.b + votes.c + votes.d;
    var percentages = {
      a: votes.a / totalVotes * 100,
      b: votes.b / totalVotes * 100,
      c: votes.c / totalVotes * 100,
      d: votes.d / totalVotes * 100
    };
    document.getElementById('result-a').textContent = percentages.a.toFixed(2);
    document.getElementById('result-b').textContent = percentages.b.toFixed(2);
    document.getElementById('result-c').textContent = percentages.c.toFixed(2);
    document.getElementById('result-d').textContent = percentages.d.toFixed(2);
    
    document.getElementById('result-a-oy').textContent = votes.a;
    document.getElementById('result-b-oy').textContent = votes.b;
    document.getElementById('result-c-oy').textContent = votes.c;
    document.getElementById('result-d-oy').textContent = votes.d;


    // yüzdelik
    const rte = document.querySelector('#rte');
    rte.style.width = percentages.a.toFixed(2) + '%';
    const mi = document.querySelector('#mi');
    mi.style.width = percentages.b.toFixed(2) + '%';
    const kk = document.querySelector('#kk');
    kk.style.width = percentages.c.toFixed(2) + '%';
    const so = document.querySelector('#so');
    so.style.width = percentages.d.toFixed(2) + '%';



    // kazanan aday adı soyadı

    if (percentages.a > percentages.b && percentages.a > percentages.c && percentages.a > percentages.d) {
        document.getElementById('kazananAday').textContent = "Recep Tayyip ERDOĞAN";
    }

    else if (percentages.b > percentages.a && percentages.b > percentages.c && percentages.b > percentages.d) {
        document.getElementById('kazananAday').textContent = "Muharrem İNCE";
    }

    else if (percentages.c > percentages.a && percentages.c > percentages.b && percentages.c > percentages.d) {
        document.getElementById('kazananAday').textContent = "Kemal KILIÇDAROĞLU";
    }

    else if (percentages.d > percentages.a && percentages.d > percentages.b && percentages.d > percentages.c) {
        document.getElementById('kazananAday').textContent = "Sinan OĞAN";
    }
}