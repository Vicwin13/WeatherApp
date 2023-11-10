
export default function Celsius(value) {

    const convert = ( fah ) =>{

        let cel = (fah - 32) * (5/9);
        return(
            `${cel} %`
        );

    }
  return (
    <>
    <p>{convert()}</p>
    </>
  );
}
