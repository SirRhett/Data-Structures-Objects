/*          Modify an Array Stored in an Object

Method:
-The function can be written in just two lines of code.
-The first line should just use the push() function to add the friendparameter 
    to the array found in user.data.friend. The second line will return the modified array.
-Remember that user mustb be referenced with the first parameter given to the addFriend() function.


Take a look at the object we've provided in the code editor. The user object contains three keys. 
The data key contains five keys, one of which contains an array of friends. From this, you can see 
how flexible objects are as data structures. We've started writing a function addFriend. 
Finish writing it so that it takes a user object and adds the name of the friend argument to 
the array stored in user.data.friends and returns that array.
*/
//SetUp:
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  
  }
  
  console.log(addFriend(user, 'Pete'));