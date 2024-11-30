const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.custom,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Behaviors.Pin,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.AddVar
	];
};
self.C3_JsPropNameTable = [
	{НастраиваемоеДвижение: 0},
	{куб: 0},
	{Платформер: 0},
	{ball: 0},
	{Твёрдый: 0},
	{стена: 0},
	{Тач: 0},
	{Прикрепить: 0},
	{шипы: 0},
	{сенсор: 0},
	{Текст: 0},
	{очки: 0}
];

self.InstanceType = {
	куб: class extends self.ISpriteInstance {},
	ball: class extends self.ISpriteInstance {},
	стена: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	шипы: class extends self.ISpriteInstance {},
	сенсор: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {}
}