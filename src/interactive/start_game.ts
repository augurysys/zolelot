import { ECellStatus, ICell } from "./board.types";

export interface IStartGame {
    generateBoard(): void;
    play(): void;
    updateCellStatus(cell: ICell): void;
    isGameCompleted(): boolean;
    validateNumOfMoves(): boolean;
    validateNumOfLiveShips(): boolean;
}

export class StartGame implements IStartGame {
    play(): void {
        throw new Error("Method not implemented.");
    }


    generateBoard(): void {
        //Gil and Keren implementaion
        throw new Error("Method not implemented.");
    }

    onCellClick(cell: ICell) {
        if (validateMove()) {
            this.updateCellStatus(cell);
        }
        else {
            throw console.log('please choose another cell!!!!')
        }
    }

    updateCellStatus(cell: ICell): void {
        switch (cell.status) {
            case ECellStatus.Empty:
                UpdateCellStatusAction(ECellStatus.Active)
                break;
            case ECellStatus.Active:
                UpdateCellStatusAction(ECellStatus.Killed)
                break;
            default:
                break;
        }
    }

    isGameCompleted(): boolean {
       return  this.validateNumOfMoves() || this.validateNumOfLiveShips()
    }

    validateNumOfMoves(): boolean {
        return store.MaxNumOfMoves > 0;
    }

    validateNumOfLiveShips(): boolean {
        return store.NumOfShipCells > 0;
    }
}
