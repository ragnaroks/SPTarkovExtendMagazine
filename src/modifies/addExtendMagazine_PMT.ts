import {BaseClasses} from '@spt/models/enums/BaseClasses';
import {ItemTpl} from '@spt/models/enums/ItemTpl';
import {NewItemFromCloneDetails} from '@spt/models/spt/mod/NewItemDetails';
import {IDatabaseTables} from '@spt/models/spt/server/IDatabaseTables';
import {ILogger} from '@spt/models/spt/utils/ILogger';
import {CustomItemService} from '@spt/services/mod/CustomItemService';
import {Traders} from '@spt/models/enums/Traders';
import idcalc from '../helpers/idcalc';

const baseId: string = '68c4638dd34c7a97f44fb300';
const newItemId: string = idcalc(baseId,0x01);
const assortId1: string = idcalc(baseId,0xff);
const assortId2: string = idcalc(baseId,0xfe);
const propsId1: string = idcalc(baseId,0x02);

export default function addExtendMagazine_PMT(logger: ILogger,customItemService: CustomItemService,tables: IDatabaseTables) {
  const weapon = tables.templates.items[ItemTpl.PISTOL_MAKAROV_PM_T_9X18PM] || null;
  if(!weapon) {
    logger.error('[SPTarkovExtendMagazine]：addExtendMagazine_PMT，' + ItemTpl.PISTOL_MAKAROV_PM_T_9X18PM + ' not found');
    return;
  }

  const magazine = tables.templates.items[ItemTpl.MAGAZINE_9X18PM_PM_8RND] || null;
  if(!magazine) {
    logger.error('[SPTarkovExtendMagazine]：addExtendMagazine_PMT，' + ItemTpl.MAGAZINE_9X18PM_PM_8RND + ' not found');
    return;
  }

  const newPrice = tables.templates.handbook.Items.find(x => x.Id === magazine._id)?.Price || 10000;

  const newItem: NewItemFromCloneDetails = {
    itemTplToClone: magazine._id,
    newId: newItemId,
    parentId: BaseClasses.MAGAZINE,
    fleaPriceRoubles: newPrice * 7.5,
    handbookPriceRoubles: newPrice * 5,
    handbookParentId: '5b5f754a86f774094242f19b',
    locales: {
      en: {
        name: 'PM(t) extended magazine',
        shortName: 'Extended',
        description: 'PM(t) extended magazine'
      },
      ch: {
        name: 'PM(t) 扩容弹匣',
        shortName: '扩容',
        description: 'PM(t) 扩容弹匣'
      }
    },
    overrideProperties: {
      CanSellOnRagfair: false,
      BackgroundColor: 'violet',
      mousePenalty: 0,
      speedPenaltyPercent: 0,
      weaponErgonomicPenalty: 0,
      ExamineExperience: 10,
      LootExperience: 10,
      MalfFeedChance: 0,
      MisfireChance: 0,
      MalfunctionChance: 0,
      MalfMisfireChance: 0,
      Weight:0,
      Recoil:0,
      Ergonomics:0,
      LoadUnloadModifier:0,
      CheckTimeModifier:0,
      Cartridges: [
        {
          _proto: magazine._props.Cartridges[0]._proto,
          _id: propsId1,
          _name: 'cartridges',
          _parent: newItemId,
          _max_count: magazine._props.Cartridges[0]._max_count * 5,
          _props: magazine._props.Cartridges[0]._props
        }
      ]
    }
  };

  const createResult = customItemService.createItemFromClone(newItem);
  if(!createResult.success) {
    logger.error('[SPTarkovExtendMagazine]：addExtendMagazine_PMT，' + createResult.errors.join('、'));
    return;
  }

  const assort1 = tables.traders[Traders.PRAPOR].assort;
  assort1.items.push({
    _id: assortId1,
    _tpl: createResult.itemId,
    parentId: 'hideout',
    slotId: 'hideout',
    upd: {
      UnlimitedCount: true,
      StackObjectsCount: 999,
      BuyRestrictionMax: 3,
      BuyRestrictionCurrent: 0
    }
  });
  assort1.loyal_level_items[assortId1] = 4;
  assort1.barter_scheme[assortId1] = [
    [
      {_tpl: ItemTpl.MONEY_ROUBLES,count: newItem.handbookPriceRoubles}
    ]
  ];

  const assort2 = tables.traders[Traders.REF].assort;
  assort2.items.push({
    _id: assortId2,
    _tpl: createResult.itemId,
    parentId: 'hideout',
    slotId: 'hideout',
    upd: {
      UnlimitedCount: true,
      StackObjectsCount: 999,
      BuyRestrictionMax: 9,
      BuyRestrictionCurrent: 0
    }
  });
  assort2.loyal_level_items[assortId2] = 1;
  assort2.barter_scheme[assortId2] = [
    [
      {_tpl: ItemTpl.MONEY_GP_COIN,count: Math.floor(newItem.handbookPriceRoubles / 7500)}
    ]
  ];

  for(const slot of weapon._props.Slots) {
    if(slot._name !== 'mod_magazine') {continue;}
    slot._props.filters[0].Filter.push(createResult.itemId);
    break;
  }

  logger.success('[SPTarkovExtendMagazine]：addExtendMagazine_PMT，Id：' + createResult.itemId);
}
