# Notes Test

This project was started on 04.03.23 as a test assignment for internship program.

### Why Javascript and React?

Despite being a bit more familiar with Java and Kotlin, I decided to use React for this task because of the following reasons:
1. It seemed like an optimal variant in terms of time and effort.
2. It was a good opportunity to learn something new and hone problem-solving skills in an unfamiliar environment and under time pressure.
3. Guides, tutorials and other documentation for React were somewhat more comprehensive and easier to find.
4. I have a proclivity for design and UI - frontend work seems to be the best application of these skills.


Another way of doing this was creating JFrame GUI from scratch in Java with Swing library, though that variant seemed quite a bit more time-consuming.

### Resources

While Material UI library is highly attractive both in terms of usability and design,
my conscious choice was to refrain from using it. What I ended up using are the React Transition Group
for smooth movement animations and React Icons.

- Minimum expected screen width: *320px*.

## Requirements

#### Обязательные требования:
- Создание одной простейшей заметки только с текстом: *check*.
- Редактирование заметки в окне собственного приложения: *check* (implemented as built-in).
- Сохранение заметки между сеансами приложения, в любом формате: *check* (browser localStorage implementation).
- При первом запуске, приложение должно иметь одну заметку с текстом: *check*.

#### Желательно:
- Создание нескольких заметок в приложении: *check*.
- Выводить список существующих заметок: *check*.
- Возможность редактирования любой заметки из списка: *check*.
- Удаление заметок: check.
- Также сохранять все заметки между сеансами: *check*.

#### Идеи для улучшения:
- Возможность выделять текст курсивом, жирным и т.п: *not done*.
- Менять шрифт и размер текста: *not done*.
- Вставка картинок: *not done*.

All the improvement ideas sound like an undertaking that would require a bit more time, 
but certainly doable with a bit of persistence; yet, I figured that I would better spend what little remained of my time
by polishing visuals instead of trying to implement complex features which could very well backfire on me.

## Additional reading

Possible example of note for improvement section: 

https://github.com/jpuri/react-draft-wysiwyg

Good read about pitfalls of making WYSIWYG editors from project lead of CKEditor:

https://medium.com/content-uneditable/contenteditable-the-good-the-bad-and-the-ugly-261a38555e9c#.v0d5rghdl

Brief overview of setting up editor with ContentEditable:

https://blixtdev.com/how-to-use-contenteditable-with-react/ (TLDR: not a matter of minutes to implement.)

Another article of note:

https://medium.com/@filip_89143/dealing-with-contenteditable-in-react-2b29ce5cb2d

## React Bootstrap Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
