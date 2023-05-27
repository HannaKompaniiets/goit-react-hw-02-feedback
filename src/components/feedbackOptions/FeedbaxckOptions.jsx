import css  from './feedbackOpt.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
      return (
          <div className={css.button_list}>
              {options.map((option) => {
                  const label = option[0].toUpperCase() + option.slice(1);  
                  return (
                      <button className={css.button_feedback} type='button' key={option} onClick={() => onLeaveFeedback(option)}>
                          {label}
                      </button> 
                  )
              } )}
        </div>
    )
}

export default FeedbackOptions;


