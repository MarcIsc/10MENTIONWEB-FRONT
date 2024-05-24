//Exercice 11
        /*
            Créez un array vide = []
            Puis créez une fonction qui prendra 2 paramètres: 2 nombres
            Le seul but de la fonction sera de pousser le premier nombre à la suite de l'array
            x fois, par rapport au 2eme nombre
            Exemple: pousser(8, 5) => [8, 8, 8, 8, 8]
        */

            let nbr1 = prompt('Nombre 1');
            let nbr2 = prompt('Nombre 2');

            let tableau = [ ]   
            let nombre  

            // console.table(tableau);
            
            function myFonction1(nbr1, nbr2){

                if (nbr1 != isNaN && nbr2 != isNaN) {
                    document.write("Ceci n'est pas un nombre")
                    
                } else {                    
                
                    for (let i = 0; i < nbr2; i++){
                        tableau.push(nbr1);
                    }     
                    document.write(tableau);            
                }
            };        
                          
            myFonction1(nbr1,nbr2);   

            //Exercice 13
        /*
            A l'aide de ce tableau et d'une boucle:
        */

        let clients = [
            {
               firstname: "Claire",
              age: 28,
           },
            {
                firstname: "Max",
                age: 32,
            },
            {
               firstname: "Léo",
               age: 23,
            },
         ];

        // Calculez et affichez dans le terminal la somme des âges.
        
        let totalAge 
         for (i = 0; i < clients.age ) {
            totalAge += client.age
            
         }
         document.write(totalAge);


// Exercice 14

        /* Créer une fonction qui doit déterminer si un utilisateur à insérer correctement un @ dans son adresse email.
            Puis afficher le résultat: true ou false
            ex: testEmail('julien@gmail.com') => true
            ex: testEmail('julien.gmail.com') => false
        */

            