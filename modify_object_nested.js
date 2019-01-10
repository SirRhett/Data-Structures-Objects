/*          Modify an Object Nested Within an Object

    Now let's take a look at a slightly more complex object. Object properties can be 
    nested to an arbitrary depth, and their values can be any type of data supported by 
    JavaScript, including arrays and even other objects. Consider the following:
*/
                let nestedObject = {
                id: 28802695164,
                date: 'December 31, 2016',
                data: {
                    totalUsers: 99,
                    online: 80,
                    onlineStatus: {
                    active: 67,
                    away: 13
                    }
                }
                };
/*
    nestedObject has three unique keys: id, whose value is a number, date whose value is 
    a string, and data, whose value is an object which has yet another object nested within 
    it. While structures can quickly become complex, we can still use the same notations to 
    access the information we need.

    Remember the object you want to change is two levels deep, dot-notation is easier to use 
    in this instance.
    Simply define the object and then use dot-notation to access the second object and finally 
    the final element you wish to modify.

Example:
*/
            let myObject = {
            level_1: 'outside',
            first_level_object: {
                level_2: '2 levels deep',
                second_level_object: {
                level_3: '3 levels deep'
                }
            }
            };
            //The following line of code will modify the data found in level_2.
            myObject.first_level_object.level_2 = 'level-2 has been reached';
/*

Here we've defined an object, userActivity, which includes another object nested within it. 
You can modify properties on this nested object in the same way you modified properties in 
the last challenge. Set the value of the online key to 45.
*/
//SetUp:
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // change code below this line
  userActivity.data.online = 45;
  // change code above this line
  
  console.log(userActivity);
