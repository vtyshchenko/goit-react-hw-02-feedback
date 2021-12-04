import styles from './FeedbackOptions.module.scss';
function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(styles);
  return (
    <div className={styles.options}>
      {options.map((optionItem, index) => (
        <button
          type="button"
          className={[styles.button, styles[optionItem]].join(' ')}
          key={optionItem}
          onClick={() => onLeaveFeedback(index)}
        >
          {optionItem}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
