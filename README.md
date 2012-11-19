neach
=====

Nested forEach implementation in JavaScript

Purpose
=====

If you imagine you have a data collection with severals layers of arrays (arrays within arrays within arrays.. arrayception), neach allows you to supply one callback and have it called on every leaf of the tree.


Usage
=====

	neach(rootArray, [arrayOfFunctionStrings], callback);


Example
=====

Consider the following:
We have a list of houses. Each house has a list of people living in it, and each person has a list of fears. Say we want to list all the fears of everybody in all the houses, we would do something like:

	for(var i = 0; i<houses.length; i++) {
		for(var j = 0; j<houses[i].getPeople().length; j++) {
			for(var k = 0; k<houses[i].getPeople()[j].getFears().length; k++) {
				console.log(houses[i].getPeople()[j].getFears()[k]);
			}
		}
	}

Very cumbersome and annoying if you're doing it multiple times. With neach:

	neach(houses, ['getPeople', 'getFears'], function(fear) { console.log(fear); });

Now wasn't that easy? And think what you could do with knowing the fears of an entire neighbourhood.


ToDo
=====
Specify one function and have it called for each level, until the function cannot be called anymore.

Pass the parent to the callback.

Allow arguments to be passed to the function calls

Delegate to browsers forEach

Non-obtrusive JS

Unit tests