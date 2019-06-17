## Beersteriz0r

Beersteriz0r is a content management system for a pub in the style of the flatscreen TV style displays now common in beer bars. It lets users see a visual representation of keg fullness, set and display happy hour pricing, etc.

It is not recommended for use (or perhaps even installation!) because of security issues in its package dependencies.

## Specs

| Behavior | Input | Output | Done |
|-|-|-|-|
| As a patron, a user can see list of all available kegs. | User clicks menu. | Page displays: <br><br> Keg name <br> brand <br> price<br> alcoholContent <br>beer style| x |
| As employee, user can add a new keg with a form | User clicks "Add Keg." |   Page displays form with above properties. | x |
| As employee, user can edit a keg's properties after entering them. | User clicks "Edit" | Page displays edit form. | x |
| User can see how many pints are in a keg. | User looks at page | Page displays progress bar on keg. | x |
| As employee, user can click a button next to keg to sell a pint of it. | User clicks sell.| Page updates keg amount. | x |
| As employee, user can select an amount before clicking sell to change the amount of pints sold. | User selects radio button, and clicks sell. | Page updates keg amount. | x |
| As employee, User can see kegs with less than 10 pints left. | User looks at page. | Page appends asterisk to low kegs. | x |
| As patron, User can identify keg prices by color codes. | User looks at page. | Page displays color coded prices. |  |
| As a patron, User identifies beers with content stronger than 7% with a skull and crossbones emoji. | User looks at page. | Page appends skull and crossbones to appropriate kegs. | x |
