'use strict'

const button = React.createElement(
  React.Fragment,
  null,
  'sdfsdf',
  React.createElement('p', null, 'Click button:'),
  React.createElement(
    'button',
    {
      style: {
        fontSize: '1rem',
      },
      className:
        'bg-blue-700 rounded-full  py-2 px-5 shadow-lg shadow-blue-300 text-white font-semibold text-sm m-10',
    },
    'Click'
  ),
  React.createElement(
    'p',
    null,
    'Click button:',
    React.createElement('p', null, 'Click button:')
  )
)

function createElement(tagName, attr, content) {
  return `<${tagName} class='${attr.className}'>${content}</${tagName}>`
}
