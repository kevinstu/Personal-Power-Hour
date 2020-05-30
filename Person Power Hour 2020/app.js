
// Categories list

let myCategories = [
  {
    title: 'Better Off Alone',
    description: 'Songs by a musician that was formerly in a (famous) group',
  },
  {
    title: 'Beyond Words',
    description: 'Songs popular in the US that feature a foreign language',
  },
  {
    title: 'Big Fat Fatties',
    description:
      'Songs peformed by an overweight musician (at the time of recording)',
  },
  {
    title: 'Body Language',
    description: 'Songs that reference a part of the human body',
  },
  {
    title: 'Bon Voyage',
    description: 'Songs that reference vacation or traveling',
  },
  {
    title: 'Boys Will Be Boys',
    description: 'Songs by a Boy Band',
  },
  {
    title: 'Chicks that Rock',
    description: 'Songs by rock bands with a female lead singer',
  },
  {
    title: 'Color Scheme',
    description: 'Songs that reference a specific color',
  },
  {
    title: 'Cover Ups',
    description: 'Covers songs that are as famous (or more) as the original',
  },
  {
    title: 'Down for the Count',
    description: 'Songs that reference a number',
  },
  {
    title: 'Dread Heads',
    description: 'Songs by an artists that has (or had) dreadlocks ',
  },
  {
    title: 'Dress for Success',
    description: 'Songs by musicians who wear iconic costumes',
  },
  {
    title: 'Drink Em Up',
    description: 'Songs that reference alcohol',
  },
  {
    title: 'Ebony and Ivory',
    description:
      'Songs that feature vocals from both a black and white musician',
  },
  {
    title: 'Folically Challenged',
    description: 'Songs by a musician that is bald (at the time of recording)',
  },
  {
    title: 'Gays Galore',
    description: 'Songs by a musician that is openly LGBTQ',
  },
  {
    title: 'Gender Bender',
    description:
      'Songs by a musician that defies gender (in dress or behavior)',
  },
  {
    title: 'Get Em Girls',
    description: 'Songs by a Girl Group (female equivalent to Boy Band)',
  },
  {
    title: 'Gimme a Break',
    description: 'Songs about a break up or past relationship',
  },
  {
    title: 'Head Over Heels',
    description: 'Songs the reference love',
  },
  {
    title: 'Hold the Phone',
    description: 'Songs that feature a phone (sound effect or reference to)',
  },
  {
    title: 'Home of the Brave',
    description: 'Songs that reference The United States of America',
  },
  {
    title: 'In Your Endo',
    description: 'Songs that contain a sexual innuendo',
  },
  {
    title: 'It Takes Two',
    description: 'Songs by famous musical duos',
  },
  {
    title: "It's a Date",
    description: 'Songs that include a date (month, year or day of week)',
  },
  {
    title: "It's a Zoo",
    description: 'Songs that feature an animal (sound or reference to)',
  },
  {
    title: 'Jock Jams',
    description: 'Songs you hear at the big game',
  },
  {
    title: 'Just Married',
    description: 'Songs you hear on every wedding playlist',
  },
  {
    title: 'Lights, Camera, Action',
    description: 'Songs associated with a movie ',
  },
  {
    title: 'Locking Lips',
    description: 'Songs the reference kissing',
  },
  {
    title: 'Meet the Parents ',
    description: 'Songs about mom, dad, or both',
  },
  {
    title: 'Minor Songs',
    description:
      'Songs by a musician under 18 years old (at the time of recording)',
  },
  {
    title: 'Move to the Music',
    description: 'Songs associated with a dance ',
  },
  {
    title: 'Name That Tune',
    description: 'Songs where the title includes a proper name',
  },
  {
    title: 'Not Christian Rock',
    description:
      'Songs that reference religion but are not explicitly religous',
  },
  {
    title: 'On the Money ',
    description: 'Songs that reference any form of currency',
  },
  {
    title: 'On the Move',
    description:
      'Songs that reference running, walking or jumping',
  },
  {
    title: 'One Hit Wonders',
    description: "Songs that overshadow the rest of a musician's work",
  },
  {
    title: 'One Too Many',
    description: 'Song by musicians that overdosed on drugs',
  },
  {
    title: 'Parental Advisory ',
    description: 'Song containing explicit content inappropriate for children',
  },
  {
    title: 'Product Placement',
    description: 'Songs that mention a trademark brand',
  },
  {
    title: 'Rain or Shine',
    description: 'Songs that reference any type of weather',
  },
  {
    title: 'Shifting Gears',
    description: 'Songs that reference cars or driving',
  },
  {
    title: 'Shut Your Mouth',
    description: 'Songs famous without any accompanying vocals or lyrics',
  },
  {
    title: 'Slashies',
    description: 'Songs by musicians who also act in Film & TV',
  },
  {
    title: 'Songs of the Summer',
    description: 'Songs that reference summer or summer fun',
  },
  {
    title: 'Space Out',
    description: 'Songs that reference any elements of outer space',
  },
  {
    title: 'Stick it to the Man',
    description: 'Songs with a political or socio-economic agenda',
  },
  {
    title: 'Take a Hit',
    description: 'Songs that refernece smoking any substance',
  },
  {
    title: 'Tasty Licks',
    description:
      'Songs that reference a specific food item or eating in general',
  },
  {
    title: 'Test the Waters',
    description: 'Songs that reference water in any form',
  },
  {
    title: "That's a Rap",
    description: 'Songs by rappers that are now deceased',
  },
  {
    title: 'Tiny Tunes',
    description: 'Songs by musicians with Lil, Young, Baby, etc. in their name',
  },
  {
    title: 'Titular Tunes',
    description: 'Songs where the title is sung (more than three times)',
  },
  {
    title: 'Townie Tunes',
    description: 'Songs that reference a specific city',
  },
  {
    title: 'Turn Up the Heat',
    description: 'Songs that reference heat, fire, increased temperature, etc.',
  },
  {
    title: 'Two First Names',
    description: 'Songs by an artist with two first names',
  },
  {
    title: 'Under the Gun',
    description: 'Songs that feature a gun (sound effect or reference to)',
  },
  {
    title: 'We are Family',
    description: 'Songs by musical groups that contain family members',
  },
  {
    title: 'White Rappers',
    description: 'Songs by rappers that are predominantly caucasion',
  },
];


// Generate random category functions

// Generate random category One

function randomCategoryOne(myCategories) {
  let category = myCategories[Math.floor(Math.random() * myCategories.length)];

  var element = document.getElementById('game-card-title-0');
  element.innerHTML = category.title;
  var element = document.getElementById('game-card-description-0');
  element.innerHTML = category.description;

  document.querySelector('#x-button-0').style = 'display: inline';

}


// Generate random category Two

function randomCategoryTwo(myCategories) {
  let category = myCategories[Math.floor(Math.random() * myCategories.length)];

  var element = document.getElementById('game-card-title-1');
  element.innerHTML = category.title;
  var element = document.getElementById('game-card-description-1');
  element.innerHTML = category.description;

  document.querySelector('#x-button-1').style = 'display: inline';
}

// Generate random category Three

function randomCategoryThree(myCategories) {
  let category = myCategories[Math.floor(Math.random() * myCategories.length)];

  var element = document.getElementById('game-card-title-2');
  element.innerHTML = category.title;
  var element = document.getElementById('game-card-description-2');
  element.innerHTML = category.description;

  document.querySelector('#x-button-2').style = 'display: inline';
}

// Generate random category Four

function randomCategoryFour(myCategories) {
  let category = myCategories[Math.floor(Math.random() * myCategories.length)];

  var element = document.getElementById('game-card-title-3');
  element.innerHTML = category.title;
  var element = document.getElementById('game-card-description-3');
  element.innerHTML = category.description;

  document.querySelector('#x-button-3').style = 'display: inline';
}

// Generate random category Five

function randomCategoryFive(myCategories) {
  let category = myCategories[Math.floor(Math.random() * myCategories.length)];

  var element = document.getElementById('game-card-title-4');
  element.innerHTML = category.title;
  var element = document.getElementById('game-card-description-4');
  element.innerHTML = category.description;

  document.querySelector('#x-button-4').style = 'display: inline';
}

// Generate random category Six

function randomCategorySix(myCategories) {
  let category = myCategories[Math.floor(Math.random() * myCategories.length)];

  var element = document.getElementById('game-card-title-5');
  element.innerHTML = category.title;
  var element = document.getElementById('game-card-description-5');
  element.innerHTML = category.description;

  document.querySelector('#x-button-5').style = 'display: inline';
}

// Generate Master Category List 


myCategories.forEach(generateMasterList);

function generateMasterList(category, index) {


  // Generate Master Category List - Cards

    // Create Card - Column Div

      const masterCardColumn = document.createElement('div');


    // Add class - Column Div

      masterCardColumn.className = 'col-lg-3';



    // Create Card - Whole

      const masterCardWhole = document.createElement('div');

    // Add class -  Whole

      masterCardWhole.className = 'card p-2 m-2 shadow-sm';

    // Append Child -  Whole

      masterCardColumn.appendChild(masterCardWhole);

    // Create Card - Body

      const masterCardBody = document.createElement('div');


    // Add class -  Body

      masterCardBody.className = 'card-body';

    // Append Child -  Body

      masterCardWhole.appendChild(masterCardBody);

    // Create Card - Title

      const masterCardTitle = document.createElement('h5');

    // Add ID -  Title

      masterCardTitle.id = `master-title-${index}`;  

    // Add class -  Title

      masterCardTitle.className = `card-title`;

    // Create Text Node - Title

     masterCardTitle.appendChild(document.createTextNode(category.title));

    // Append Child -  Title

     masterCardBody.appendChild(masterCardTitle);


    // Create Card - Text

      const masterCardText = document.createElement('p');

    // Add ID -  Text

      masterCardText.id = `master-text-${index}`;  

    // Add class -  Text

      masterCardText.className = `card-title`;


    // Create Text Node - Text

      masterCardText.appendChild(document.createTextNode(category.description));

    // Append Child -  Text

      masterCardBody.appendChild(masterCardText);

    // Append finished card to row

      document.querySelector('#master-card-row').appendChild(masterCardColumn);


  // Generate Master Category List - Buttons

    // Create - Button Wrapper

      const masterButtonWrapper = document.createElement('div');


    // Add class - Button Wrapper

      masterButtonWrapper.className = 'text-center';


    // Create - Button

      const masterButton = document.createElement('button');

    // Add class -  Button

      masterButton.className = 'add-to-game-button btn btn-sm btn-primary text-light';

    // Create Text Node - Button

      masterButton.appendChild(document.createTextNode('Add to Game'));


    // Append Child -  Button

      masterButtonWrapper.appendChild(masterButton);


    // Append finished button to column

      masterCardColumn.appendChild(masterButtonWrapper);

}



// Add Category to Game from Master Category List

  // click event for "add to game" button

  const addToGameButton = document.querySelectorAll('.add-to-game-button');


  for (var i = 0; i < addToGameButton.length; i++) {
      addToGameButton[i].addEventListener('click', function() {


            
      // replace game title/description with master card title/description  

       let masterTitle = this.parentElement.previousElementSibling.children[0].children[0].innerText; 
       let masterDescription  = this.parentElement.previousElementSibling.children[0].children[1].innerText; 


       // If X is not displayed, replace category...

       if (document.querySelector('#x-button-0').style.display === "none")  {


         // Fill in Category One

         let gameCardTitle = document.getElementById(`game-card-title-0`);
         let gameCardDescription = document.getElementById(`game-card-description-0`);


         gameCardTitle.innerText = masterTitle;
         gameCardDescription.innerText = masterDescription;

         document.querySelector('#x-button-0').style = 'display: inline';

        }  else if (document.querySelector('#x-button-1').style.display === "none") {

         // Fill in Category Two   

         let gameCardTitle = document.getElementById(`game-card-title-1`);
         let gameCardDescription = document.getElementById(`game-card-description-1`);


         gameCardTitle.innerText= masterTitle;
         gameCardDescription.innerText = masterDescription;

         document.querySelector('#x-button-1').style = 'display: inline';

        } else if (document.querySelector('#x-button-2').style.display === "none") {


         // Fill in Category Three

         let gameCardTitle = document.getElementById(`game-card-title-2`);
         let gameCardDescription = document.getElementById(`game-card-description-2`);


         gameCardTitle.innerText= masterTitle;
         gameCardDescription.innerText = masterDescription;

         document.querySelector('#x-button-2').style = 'display: inline';

        } else if (document.querySelector('#x-button-3').style.display === "none") {


         // Fill in Category Four

         let gameCardTitle = document.getElementById(`game-card-title-3`);
         let gameCardDescription = document.getElementById(`game-card-description-3`);


         gameCardTitle.innerText= masterTitle;
         gameCardDescription.innerText = masterDescription;

         document.querySelector('#x-button-3').style = 'display: inline';

        } else if (document.querySelector('#x-button-4').style.display === "none") {


         // Fill in Category Five

         let gameCardTitle = document.getElementById(`game-card-title-4`);
         let gameCardDescription = document.getElementById(`game-card-description-4`);


         gameCardTitle.innerText= masterTitle;
         gameCardDescription.innerText = masterDescription;

         document.querySelector('#x-button-4').style = 'display: inline';

        } else {


         // Fill in Category Six

         let gameCardTitle = document.getElementById(`game-card-title-5`);
         let gameCardDescription = document.getElementById(`game-card-description-5`);


         gameCardTitle.innerText= masterTitle;
         gameCardDescription.innerText = masterDescription;

         document.querySelector('#x-button-5').style = 'display: inline';

        } 

      });
  }


// Wipe Category

  const xButton = document.querySelectorAll('.x-button');

  for (var i = 0; i < xButton.length; i++) {
    xButton[i].addEventListener('click', function(wipeCategory) {

      let gameCard = this.parentElement;
      let gameCardTitle = this.nextElementSibling.children[0];
      let gameCardDescription = this.nextElementSibling.children[1];

      wipeCategory.preventDefault();
      gameCardTitle.innerText = 'Select Category';
      gameCardDescription.innerText = 'You must select all six categories to begin your hour.';

      this.style = 'display: none';
    });
  }




// 'Let's Party' Button



function letsParty() {

  let txt;

  if (confirm("You are about to lock in your 6 categories and begin the game. You will not be able to restart. That cool?")) {
 
  document.querySelector('#lets-party').style = 'display: none';
  
  document.querySelector('#timer-div').style = 'display: inline';

  document.querySelector('#timer-div').style = 'display: inline';

  document.querySelector('#navbar').style = 'display: none';

  // document.querySelector('#play').style = 'margin-top: 25px;';

  document.querySelector('#header-text').innerText = "Let's Party...";

  document.querySelector('#header-text').style = "font-size: 3rem";

  document.querySelector('#header-subtext').style = 'display: none';

  document.querySelector('#how-to-play').style = 'display: none';
  
  document.querySelector('#categories').style = 'display: none';

  // random button disappear

  const randomButton = document.querySelectorAll('.random-category');
  for (var i = 0; i < randomButton.length; i++) {

  randomButton[i].style = 'display: none';

  }

  // x buttons disappear

  const xButton = document.querySelectorAll('.x-button');
  for (var i = 0; i < xButton.length; i++) {

    xButton[i].style = 'display: none';
  }

}

}



  // Clock Stuff

const tryIt = document.querySelector('#try-it');

tryIt.addEventListener('click', countdownTimer);


function countdownTimer() {



  let countDownDate =   new Date().setMinutes( new Date().getMinutes() + 61, );
  

  // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);


}






// Get the current year for copyright
$('#year').text(new Date().getFullYear());





