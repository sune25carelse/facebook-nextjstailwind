import Image from "next/image";

function InputBox() {
  return (
    <div>
      <div>
        <Image
          className="rounded-full"
          src={session.user.image}
          height={40}
          width={40}
          layout="fixed"
        />
      </div>
    </div>
  );
}

export default InputBox;
