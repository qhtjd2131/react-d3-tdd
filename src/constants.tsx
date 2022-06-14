import { getPageSectionLabel } from "./pageInfo";

export const SECTION_LABEL = getPageSectionLabel();
export const PAGE_COUNT = SECTION_LABEL.length; //MAIN을 포함한 PAGE 수
export const PAGE_COUNT_WITHOUT_MAIN = SECTION_LABEL.length - 1;
