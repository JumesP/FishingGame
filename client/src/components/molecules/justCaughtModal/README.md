# How this component works:

### 0. Homescreen layout

"Cast Rod" button and list of current equipment

### 1. click "Cast Rod" button

this will see what equipment the user is using via an api call, and generate the fish (this is done as it will help later wth a legendary catch at the same time)

api details:
get random fish using current equipment
use durability? (if so, reduce durability)

### 2. play the Fishing Mechanic minigame

this will determine if you get the fish youre trying for or not (also helpful when implementing the legendary catch!)

### 3a. if you catch the fish

a model opens up with the fish you caught, and a button to "keep" or "sell" the fish
add either fish or money to the user's inventory

### 3b. if you dont catch the fish

back to the cast your rod screen

