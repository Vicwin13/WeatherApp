
export default function Celsius({ value }) {

    const convert = ( value) =>{

        let cel = (value - 32) * (5/9);
        return cel;

    }
  return (
    <>
    <p>{convert()}</p>
    </>
  );
}
