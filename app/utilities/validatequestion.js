const validateQuestion = (bundle) => {
  const requireFields = [
    'title',
    'body',
  ];
  let errors = '';
  for (let i = 0; i < requireFields.length; i += 1) {
    if (bundle[requireFields[i]] === '') {
      errors += `The ${requireFields[i]} is empty. `;
    }
  }
  return errors;
};

export default validateQuestion;
