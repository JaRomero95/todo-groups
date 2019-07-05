function expectQueryParams(params, xhr) {
  const {searchParams} = new URL(xhr.url);

  Object.keys(params).forEach(paramKey => {
    const paramValue = searchParams.get(paramKey);
    const expectedValue = params[paramKey];
    const matcher = getMatcherFromValueType(expectedValue);

    expect(paramValue).to[matcher](expectedValue);
  });
}

function getMatcherFromValueType(value) {
  return value && value.constructor === RegExp ? 'match' : 'eq';
}

export {
  // eslint-disable-next-line import/prefer-default-export
  expectQueryParams,
};
