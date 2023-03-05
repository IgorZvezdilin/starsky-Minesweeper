import btnInitState from './button-states/minesweeper-sprites_button_initial_state.png';
import btnCheckFlag from './button-states/minesweeper-sprites_button_check_flag.png';
import btnCheckQo from './button-states/minesweeper-sprites_button_check_qo.png';
import btnClickEmpty from './button-states/minesweeper-sprites_button_click_empty.png'
import btnClickMine from './button-states/minesweeper-sprites_button_click_mine.png'
import btnClickQo from './button-states/minesweeper-sprites_button_click_qo.png';
import btnClickMistakeMine from './button-states/minesweeper-sprites_button_mistake_mine.png';
import btnUnclickMine from './button-states/minesweeper-sprites_button_unclick_mine.png';

import emojiCool from './emoji-states/minesweeper-sprites_emoji_cool.png';
import emojiFrigt from './emoji-states/minesweeper-sprites_emoji_fright.png';
import emojiLose from './emoji-states/minesweeper-sprites_emoji_lose.png';
import emojiSmileClick from './emoji-states/minesweeper-sprites_emoji_smile_clicked.png';
import emojiSmile from './emoji-states/minesweeper-sprites_emoji_smile.png';

import mineSur1 from './field-mines-surround/minesweeper-sprites_mines_surround_1.png';
import mineSur2 from './field-mines-surround/minesweeper-sprites_mines_surround_2.png';
import mineSur3 from './field-mines-surround/minesweeper-sprites_mines_surround_3.png';
import mineSur4 from './field-mines-surround/minesweeper-sprites_mines_surround_4.png';
import mineSur5 from './field-mines-surround/minesweeper-sprites_mines_surround_5.png';
import mineSur6 from './field-mines-surround/minesweeper-sprites_mines_surround_6.png';
import mineSur7 from './field-mines-surround/minesweeper-sprites_mines_surround_7.png';
import mineSur8 from './field-mines-surround/minesweeper-sprites_mines_surround_8.png';

import timeNumbers0 from './numbers/minesweeper-sprites_number_0.png';
import timeNumbers1 from './numbers/minesweeper-sprites_number_1.png';
import timeNumbers2 from './numbers/minesweeper-sprites_number_2.png';
import timeNumbers3 from './numbers/minesweeper-sprites_number_3.png';
import timeNumbers4 from './numbers/minesweeper-sprites_number_4.png';
import timeNumbers5 from './numbers/minesweeper-sprites_number_5.png';
import timeNumbers6 from './numbers/minesweeper-sprites_number_6.png';
import timeNumbers7 from './numbers/minesweeper-sprites_number_7.png';
import timeNumbers8 from './numbers/minesweeper-sprites_number_8.png';
import timeNumbers9 from './numbers/minesweeper-sprites_number_9.png';



const contextObj = {
    buttonState: [btnInitState, btnCheckFlag, btnCheckQo, btnClickEmpty, btnClickMine, btnClickQo, btnClickMistakeMine,btnUnclickMine],
    emojiState: [emojiCool, emojiFrigt, emojiLose, emojiSmileClick, emojiSmile],
    minesSurround: [mineSur1, mineSur2, mineSur3, mineSur4, mineSur5, mineSur6, mineSur7, mineSur8],
    numbers: [timeNumbers0, timeNumbers1, timeNumbers2, timeNumbers3, timeNumbers4, timeNumbers5, timeNumbers6, timeNumbers7, timeNumbers8, timeNumbers9]
}

export default contextObj;