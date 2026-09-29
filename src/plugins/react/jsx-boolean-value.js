/**
 * @typedef {import('@eslint-react/kit').RuleFunction} RuleFunction
 */

/**
 * Enforce shorthand for boolean JSX attributes (`disabled` over
 * `disabled={true}`).
 *
 * @returns {RuleFunction}
 * @see https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react#jsx-boolean-value
 */
export function jsxBooleanValue() {
  return (context, { ast }) => ({
    JSXAttribute(node) {
      const { value } = node;

      if (value?.type !== 'JSXExpressionContainer') {
        return;
      }

      const expression = ast.unwrap(value.expression);

      if (expression.type !== 'Literal' || expression.value !== true) {
        return;
      }

      context.report({
        node,
        message: 'Omit the value for boolean attributes.',
        fix: (fixer) => fixer.removeRange([node.name.range[1], value.range[1]]),
      });
    },
  });
}
