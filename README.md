# ProGuidesOOP
## About
This App is a demonstration of OOP/DB Design using World of Warcraft player characters and items. 

<div>Each item has a specific slot it can be equipped to:</div>
<div style="display:flex; flex-wrap:wrap">
  <ul> 
    <li>Helm</li>
    <li>Shoulder</li>
    <li>Cloak</li>
    <li>Chest</li>
    <li>Bracer</li>
    <li>Glove</li>
  </ul>
  <ul>
    <li>Belt</li>
    <li>Legs</li>
    <li>Ring (2 slots)</li>
    <li>Trinket (2 slots)</li>
    <li>Weapon (2 hander)</li>
  </ul>
</div>

<div>These items give a non-negative amount of:</div>
<ul >
<li>Health</li>
<li>Stamina</li>
<li>Critical Strike Rating</li>
<li>Haste Rating</li>
<li>Mastery Rating</li>
<li>Versatility Rating</li>
</ul>

## Database Design

The database tables created for this project have the following schema:


StatTypes
------------
|Column     |Value      |
|-----------|-----------|
|ID         |INT        |
|Name       |STRING     |

SlotTypes
------------
|Column     |Value      |
|-----------|-----------|
|ID         |INT        |
|Name       |STRING     |
|SlotNums   |INT        |


Item
----------
|Column     |Value            |
|-----------|-----------------|
|ID         |INT              |
|Name       |STRING           |
|SlotTypeID |INT (Foreign Key)|

ItemStat
----------
|Column     |Value            |
|-----------|-----------------|
|ID         |INT              |
|ItemID     |INT (Foreign Key)|
|StatTypeID |INT (Foreign Key)|
|Value      |INT              |
|BaseAttr   |BOOL             |
|TimeActive |INT              |


Character
---------------
|Column     |Value            |
|-----------|-----------------|
|ID         |INT              |
|Name       |STRING           |

CharacterSlot
---------------
|Column     |Value            |
|-----------|-----------------|
|ID         |INT              |
|CharacterID|INT (Foreign Key)|
|SlotTypeID |INT (Foreign Key)|
|ItemID     |INT (Foreign Key)|
|Active     |BOOL             |

Event
---------------
|Column     |Value            |
|-----------|-----------------|
|ID         |INT              |
|Name       |STRING           |


CharacterEvents
---------------
|Column     |Value            |
|-----------|-----------------|
|ID         |INT              |
|CharacterID|INT (Foreign Key)|
|EventID    |INT (Foreign Key)|
|TimeStamp  |DATETIME         |

## Installation

**A sql dump can be found in the `exports` folder under the app directory**

**A postman export can be found in the `postman` folder under the app directory**

### Server

Install MySQL
```
brew install mysql
```

```
# navigate to server folder and 
install dependencies
$ cd server
$ npm install
$ npm run start
```


### Client
```
# navigate to client folder and install dependencies
$ cd client
$ npm install
$ npm run start
```
