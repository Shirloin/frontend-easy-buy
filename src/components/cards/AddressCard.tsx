import Button from "../ui/Button";

export default function AddressCard() {
  return (
    <>
      <div className="flex w-full items-center rounded-lg px-6 py-4 shadow-all-sides">
        <div className="">
          <p className="text-sm font-bold">Rumah</p>
          <p className="text-lg font-bold">Riccardo</p>
          <p className="leading-tight tracking-tight">62895613213611</p>
          <p className="leading-tight tracking-tight">
            Jl. Rw. Belong No.4, RT.1/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota
            Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
          </p>
          <div className="mt-4 flex gap-8">
            <Button
              title="Edit Address"
              type="ghost"
              className="text-green-500"
              size="large"
            />
            <Button
              title="Delete"
              type="ghost"
              className="text-green-500"
              size="large"
            />
          </div>
        </div>
        <Button title="Choose" className="h-fit bg-green-600" size="large" />
      </div>
    </>
  );
}
