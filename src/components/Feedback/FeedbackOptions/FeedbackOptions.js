
function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
        <div>
            {options.map((optionItem, index) => (
                <button key={optionItem} onClick={() => onLeaveFeedback(index)}>{optionItem}</button>
            ))}
        </div>
    );
}


export default FeedbackOptions;
