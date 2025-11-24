import { BasicDetails } from './aside/BasicDetails';
import { Bio } from './aside/Bio';
import { ContactInfo } from './aside/ContactInfo';
import { DownloadCVButton } from './aside/DownloadCVButton';

export default function Aside() {
  return (
    <aside className='border-r-[0.5px] border-white/30 px-[30px] py-[30px] bg-[#181818]'>
      <BasicDetails />
      <div className='flex flex-col gap-[30px] mt-4'>
        <Bio />
        <ContactInfo />
        <DownloadCVButton />
      </div>
    </aside>
  );
}
