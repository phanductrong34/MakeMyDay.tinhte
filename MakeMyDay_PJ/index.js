firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        const unsetContainer = document.getElementById('unset_list');
        const userId = user.uid;
        let works = firebase.database().ref(userId + '/works');
        works.on('value', function(snapshot) {
            console.log(snapshot.val());
            const worksList = snapshot.val();
            for(let i = 0; i < worksList.length; i++) {
                console.log(worksList[i]);
                if(worksList[i].date == null|| worksList[i].date == undefined) {
                    if(worksList[i].label == 0) {
                        unsetContainer.insertAdjacentHTML('beforeend', `<li class="blue">${worksList[i].name}</li>`);
                    } else if(worksList[i].label == 1) {
                        unsetContainer.insertAdjacentHTML('beforeend', `<li class="yellow">${worksList[i].name}</li>`);
                    } else if(worksList[i].label == 2) {
                        unsetContainer.insertAdjacentHTML('beforeend', `<li class="green">${worksList[i].name}</li>`);
                    } else {
                        unsetContainer.insertAdjacentHTML('beforeend', `<li class="red">${worksList[i].name}</li>`);
                    }
                };
                
            }
            
        });

    } else {
        console.log('fail!');
    }
  });
