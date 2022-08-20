import { CardIdolEvent } from "./cardidolevent";
import { CardMemoryAppeal } from "./cardmemoryappeal";
import { Idol } from "./idol";
import { PanelSlot } from "./panelslot";

export interface PCard {
    cardIndex: number;
    enzaId: number;
    cardName: string;
    cardUuid: string;
    bigPic1: string;
    bigPic2: string;
    smlPic: string;
    cardType: string;
    getMethod: string;
    releaseDate: string;
    idol: Idol;
    cardIdolEvents: CardIdolEvent[];
    cardMemoryAppeals: CardMemoryAppeal[];
    cardPanels: PanelSlot[];
}