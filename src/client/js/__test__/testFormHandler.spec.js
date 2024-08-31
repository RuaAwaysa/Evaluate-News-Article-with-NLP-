// import { handleSubmit } from "../formHandler";

// // Mock the fetch function
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve({
//       polarity: 'N',
//       subjectivity: 'SUBJECTIVE',
//       text: 'Reuters'
//     }),
//   })
// );

// describe("Testing the submit functionality", () => {
//   // Mock the DOM elements used in updateUI
//   beforeAll(() => {
//     // Mocking the form element to avoid the null error
//     document.body.innerHTML = `
//       <form id="urlForm"></form>
//       <div id="polarity"></div>
//       <div id="subjectivity"></div>
//       <div id="text-content"></div>
//     `;

//     const form = document.getElementById('urlForm');
//     form.addEventListener('submit', handleSubmit); // This won't fail now
//   });

//   test("Testing the handleSubmit() function with a valid URL", async () => {
//     const url = "https://www.bbc.com/news/articles/c984g10e22lo";
    
//     // Mocking event.preventDefault() since we're not triggering an actual form submit event
//     const event = { preventDefault: jest.fn() };
    
//     // Call the handleSubmit function
//     await handleSubmit(event, url);
    
//     // Verify that the DOM was updated correctly
//     expect(document.getElementById('polarity').innerText).toBe('Polarity: N');
//     expect(document.getElementById('subjectivity').innerText).toBe('Subjectivity: SUBJECTIVE');
//     expect(document.getElementById('text-content').innerText).toBe('Text: Reuters');
//   });
// });
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;