import { Grid2 } from "@mui/material";
import type { GridSpacing } from "@mui/material";
type GridProps = {
    spacing: GridSpacing;
};

export default function KGrid({ spacing }: GridProps) {
    return (
        <Grid2 container spacing={spacing}>

        </Grid2>
    );
}