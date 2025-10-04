import {BaseClasses} from '@spt/models/enums/BaseClasses';
import {ItemTpl} from '@spt/models/enums/ItemTpl';
import {NewItemFromCloneDetails} from '@spt/models/spt/mod/NewItemDetails';
import {IDatabaseTables} from '@spt/models/spt/server/IDatabaseTables';
import {ILogger} from '@spt/models/spt/utils/ILogger';
import {CustomItemService} from '@spt/services/mod/CustomItemService';
import {Traders} from '@spt/models/enums/Traders';
import {IBotConfig} from '@spt/models/spt/config/IBotConfig';
import idcalc from '../helpers/idcalc';

const baseId: string = '68c44233415af7524c7d7800';
const newItemId: string = idcalc(baseId,0x01);
const assortId1: string = idcalc(baseId,0xff);
const assortId2: string = idcalc(baseId,0xfe);
const propsId1: string = idcalc(baseId,0x02);

export default function addExtendMagazine_AK50(logger: ILogger,modConfig:ModConfig,customItemService: CustomItemService,tables: IDatabaseTables,botConfig:IBotConfig) {
  logger.success('[SPTarkovExtendMagazine]：addExtendMagazine_AK50，skipped');
}
