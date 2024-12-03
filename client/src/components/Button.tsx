import Button from '@mui/material/Button';

type ButtonParams = {
    buttonText: string;
};

export default function KButton({ buttonText }: ButtonParams) {
  return <Button variant='contained'>{buttonText}</Button>;
}