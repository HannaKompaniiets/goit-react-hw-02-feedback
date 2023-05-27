const FeedbackOptions = ({ options, onLeaveFeedback }) => {
      return (
          <div>
              {options.map((option) => {
                  const label = option[0].toUpperCase() + option.slice(1);  
                  return (
                      <button type='button' key={option} onClick={() => onLeaveFeedback(option)}>
                          {label}
                      </button> 
                  )
              } )}
        </div>
    )
}

export default FeedbackOptions;


