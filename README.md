# Pencil Durability Kata

For my application to the Apprenticeship Program, I decided to complete the Pencil Durability kata: https://github.com/PillarTechnology/kata-pencil-durability

---
## Instructions
1. `git clone https://github.com/ZerrickStaples/pencildurability.git`
2. `cd pencildurability`
3. `yarn install`
4. `npm test`

---
## Thought Process 

Overall, I felt like this kata was a good challenge for my level of experience. Some portions of the kata were formidable but I tapped into my resources and I was able to complete the kata in a reasonable amount of time.

---
### Write
It was great to ease into the kata with the write function. The first couple tests helped build my confidence going forward and were a good foundation for the next piece of functionality.

---
### Point Degradation
Once I broke down how I was going to write my first test, I started thinking about real life and realized we were dealing with 'state' then I refactored the code into a Pencil and Paper class. My experience was limited with classes in JavaScript so I had to do research but I eventually got it working.

---
### Sharpen

The sharpen function was self explanatory and I found that it was one of the easiest functions to write.

---
### Erase

The eraser function was one of the most difficult parts of the kata. There were a couple different ways to proceed with erase. At first I started off trying to emulate the write function but that didn't work out. I eventually ended up using the 'splice' method to create substrings and append them to each other to get the desired result.

---
### Eraser Degradation

This is where the eraser function takes after the write function. I had to set conditions for the eraser durability to decrease, limit it to 0, and return letters when the eraser durability reaches 0.

---
### Edit

The edit function was another part of the kata that threw me for a loop. Breaking down the requirements and taking small deliberate steps towards the goal. I thought it would be simple as mirroring the erase function and replacing a couple of lines of code but eventually I realized that a new course of action had to be taken.
