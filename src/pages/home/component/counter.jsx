import "./counter.css";
import { Fragment } from "react";

const CounterTimer = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) => {
  return (
    <>
      <Fragment>
        <section className="timer-container">
          <section className="timer">
            <div className="clock">
              <section>
                <p>{timerDays}</p>
                <small>Days</small>
              </section>
              <span>:</span>
              <section>
                <p>{timerHours}</p>
                <small>Hours</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerMinutes}</p>
                <small>Minutes</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerSeconds}</p>
                <small>Seconds</small>
              </section>
            </div>
          </section>
        </section>
      </Fragment>
    </>
  );
};

CounterTimer.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default CounterTimer;
