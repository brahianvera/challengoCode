// CODE FROM. 
// https://betterprogramming.pub/learn-how-to-use-async-await-like-a-pro-481a5b829bf0

const getCharacters = () => {
	return new Promise((resolve,reject) => {
  	setTimeout(() => {
    	const characters = [
		'rick',
		'jerry',
		'morty',
		'rick',
		'kate',
		'summer',
		'summer',
		'kate',
		'noob noob',
		'jerry',
		'morty jr',
		'morty',
		'evil morty',
		'evil rick',
		'noob noob',
		'morty jr'
	]
      resolve(characters);
    },300)
  })
}

const main = async () => {
	const characters = await getCharacters();
  const counts = characters.reduce((accumulator,character,index) => {
  	accumulator[character] ? accumulator[character].count++ : 
	accumulator[character] = {name: character, count: 1, index: index};
    return accumulator;
  },{})
  
  const imposters = Object.entries(counts)
  .filter(([key,obj]) => obj.count === 1)
  .map(([key,obj]) => ({name: key, index: obj.index}))
  
  console.log(imposters);
}

main();

//output:
// [{name: 'evil morty', index: 12},{name: 'evil rick', index: 13}]