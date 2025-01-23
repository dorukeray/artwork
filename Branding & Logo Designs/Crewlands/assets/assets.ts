import { CountryId } from "@game/types/country-id";
import { ITile, TileId } from "@game/modules/tile/tile-types";
import { ILandmark, LandmarkId } from "@game/modules/landmark/landmark-types";
import { IUnit, UnitId } from "@game/modules/unit/unit-types";

const _assets = import.meta.glob("@/assets/**/*.(png)", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function getAllUrls() {
  return Object.values(_assets);
}

export function asset(path: string) {
  return _assets[`/src/assets/${path}`];
}

//#region Sprites
export const tileSprites: {
  [TileId.Land]: Record<CountryId, string>;
  [TileId.Sea]: string;
} = {
  [TileId.Land]: {
    [CountryId.Cyan]: asset("tiles/land/cyan.png")!,
    [CountryId.Dust]: asset("tiles/land/dust.png")!,
    [CountryId.Green]: asset("tiles/land/green.png")!,
    [CountryId.Magenta]: asset("tiles/land/magenta.png")!,
    [CountryId.Olive]: asset("tiles/land/olive.png")!,
    [CountryId.Orange]: asset("tiles/land/orange.png")!,
    [CountryId.Purple]: asset("tiles/land/purple.png")!,
    [CountryId.Red]: asset("tiles/land/red.png")!,
    [CountryId.Sand]: asset("tiles/land/sand.png")!,
    [CountryId.Yellow]: asset("tiles/land/yellow.png")!,
  },
  [TileId.Sea]: asset("tiles/sea.png")!,
};

export const landmarkSprites: Record<LandmarkId, string> = {
  [LandmarkId.Banner]: asset("landmarks/banner.png")!,
  [LandmarkId.Mountains]: asset("landmarks/mountains.png")!,
  [LandmarkId.Forest]: asset("landmarks/forest.png")!,
  [LandmarkId.Chest]: asset("landmarks/chest.png")!,
};

export const unitSprites: Record<UnitId, Record<CountryId, string>> = {
  [UnitId.Soldier]: {
    [CountryId.Cyan]: asset("units/soldier/cyan.png")!,
    [CountryId.Dust]: asset("units/soldier/dust.png")!,
    [CountryId.Green]: asset("units/soldier/green.png")!,
    [CountryId.Magenta]: asset("units/soldier/magenta.png")!,
    [CountryId.Olive]: asset("units/soldier/olive.png")!,
    [CountryId.Orange]: asset("units/soldier/orange.png")!,
    [CountryId.Purple]: asset("units/soldier/purple.png")!,
    [CountryId.Red]: asset("units/soldier/red.png")!,
    [CountryId.Sand]: asset("units/soldier/sand.png")!,
    [CountryId.Yellow]: asset("units/soldier/yellow.png")!,
  },
  [UnitId.Ship]: {
    [CountryId.Cyan]: asset("units/ship/cyan.png")!,
    [CountryId.Dust]: asset("units/ship/dust.png")!,
    [CountryId.Green]: asset("units/ship/green.png")!,
    [CountryId.Magenta]: asset("units/ship/magenta.png")!,
    [CountryId.Olive]: asset("units/ship/olive.png")!,
    [CountryId.Orange]: asset("units/ship/orange.png")!,
    [CountryId.Purple]: asset("units/ship/purple.png")!,
    [CountryId.Red]: asset("units/ship/red.png")!,
    [CountryId.Sand]: asset("units/ship/sand.png")!,
    [CountryId.Yellow]: asset("units/ship/yellow.png")!,
  },
};
//#endregion

//#region Country
export const countryColors: Record<CountryId, string> = {
  [CountryId.Cyan]: "#64a9c6",
  [CountryId.Dust]: "#9a9b79",
  [CountryId.Green]: "#37d98c",
  [CountryId.Magenta]: "#c76bb2",
  [CountryId.Olive]: "#9bc846",
  [CountryId.Orange]: "#fe8933",
  [CountryId.Purple]: "#9179ff",
  [CountryId.Red]: "#fc5c65",
  [CountryId.Sand]: "#c89880",
  [CountryId.Yellow]: "#ffb600",
};

export const countryNames: Record<CountryId, string> = {
  [CountryId.Cyan]: "Cyan",
  [CountryId.Dust]: "Dust",
  [CountryId.Green]: "Green",
  [CountryId.Magenta]: "Magenta",
  [CountryId.Olive]: "Olive",
  [CountryId.Orange]: "Orange",
  [CountryId.Purple]: "Purple",
  [CountryId.Red]: "Red",
  [CountryId.Sand]: "Sand",
  [CountryId.Yellow]: "Yellow",
};
//#endregion

export function getTileSprite(tile: ITile): string {
  switch (tile.id) {
    case TileId.Land:
      if (tile.owner) return tileSprites[tile.id][tile.owner];
      return asset("tiles/land/none.png")!;
    case TileId.Sea:
      return asset("tiles/sea.png")!;
  }
}

export function getLandmarkSprite(landmark: ILandmark): string {
  return landmarkSprites[landmark.id];
}

export function getUnitSprite(unit: IUnit): string {
  return unitSprites[unit.id][unit.owner];
}

export function getCountryColor(country: CountryId | undefined) {
  if (country === undefined) return "#fff";
  return countryColors[country];
}

export function getCountryName(country: CountryId | undefined) {
  if (country === undefined) return "None";
  return countryNames[country];
}

export * as assets from "./assets";
