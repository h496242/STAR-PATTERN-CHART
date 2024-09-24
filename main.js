 var user = prompt('First');
        var pattren = ''
        if (user == user) {
            for (var i = 1; i <= user; i++) {
                for (var j = 1; j <= i; j++) {
                    pattren += "\*"
                }
                pattren += "\n"
            }

            document.getElementById('pattren').innerHTML=pattren
            }
        else {
                console.log('nxsj')
            }
            var user1 = prompt('second');
        var pattren1 = ''
        if (user1 == user1) {
            for (var i = user1; i >= 1; i--) {
                for (var j = 1; j <= i; j++) {
                    pattren1 += "\*"
                }
                pattren1 += "\n"
            }

            document.getElementById('pattren1').innerHTML=pattren1
            }
        else {
                console.log('nxsj')
            }