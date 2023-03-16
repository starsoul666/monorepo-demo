export interface ITestButtonProps {
  text: string
}

function TestButton(props: ITestButtonProps) {
  const { text, ...restProps } = props
  return <button {...restProps}>{text}</button>
}

export default TestButton
