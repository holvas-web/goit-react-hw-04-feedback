// Цей код відображає інтерактивний додаток для збору та відображення статистики зібраного фідбеку від користувачів. 
// Він використовує компоненти для структури та відображення даних, а також стан для зберігання даних про фідбек.

import { Component } from "react";
import { Container } from './GlobalStyle';
import { SectionWrap } from './SectionWrap/SectionWrap';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

// Оголошення класового компонента App
export class App extends Component {

  // стан для зберігання даних про кількість "гарно", "нейтрально" та "погано" натисків від користувачів
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Ця функція оновлює стан, додаючи 1 до значення обраного типу фідбеку (гарний, нейтральний, поганий). Вона передається як пропс (властивість) у компонент FeedbackOptions.
  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1})
    );
  };

  // Ці функції обчислюють загальну кількість фідбеку та відсоток позитивного фідбеку (використовуються для відображення статистики). 
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100) || 0;
  };

  // Ця функція відповідає за відображення компонентів на сторінці (використовує розраховані значення, створює масив ключів стану для передачі до компоненту FeedbackOptions та обчислює загальну кількість фідбеку та відсоток позитивного фідбеку.
  render() {
    const {good, neutral, bad} = this.state;
    const options=Object.keys(this.state);
    const totalFeedback=this.countTotalFeedback();
    const totalPercentage=this.countPositiveFeedbackPercentage();

  // У цій частині коду відбувається рендерінг. Спочатку відображаються компоненти для збору фідбеку. Потім, якщо є хоча б один натиск, відображається статистика за допомогою компонента Statistics. Якщо немає фідбеку, відображається повідомлення через компонент Notification.
    return (
      <Container>
        <SectionWrap title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </SectionWrap>
        
        <SectionWrap title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionWrap>
      </Container>
    );
  };
};