import { AvatarFallback, AvatarImage, Avatar as AvatarNative } from "@/components/ui/avatar";
import { getFirstLetter } from '@/lib/utils';

type Props = {
    fallBackText: string,
    src: string,
    alt: string
};

export const Avatar = ({ fallBackText, src, alt }: Props) => (
    <AvatarNative>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{getFirstLetter(fallBackText)}</AvatarFallback>
    </AvatarNative>
);