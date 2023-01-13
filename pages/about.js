export default function About({ res }) {
  console.log(res);
  return <div>about</div>;
}

About.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://evilinsult.com/generate_insult.php?lang=en&type=json`
  );
  const json = await res.json();
  return { res: json };
};

/* export async function getServerSideProps() {
  const req = await fetch(
    `https://evilinsult.com/generate_insult.php?lang=en&type=json`
  );
  const data = await req.json();

  return {
    props: { res: data },
  };
}
*/
