import * as _cardano_sdk_core from '@cardano-sdk/core';
import { Cardano, Serialization } from '@cardano-sdk/core';
export { _cardano_sdk_core as CardanoSDK };
export { Cardano, Serialization } from '@cardano-sdk/core';
import * as _cardano_sdk_util from '@cardano-sdk/util';
import { OpaqueString } from '@cardano-sdk/util';
export { _cardano_sdk_util as CardanoSDKUtil };
import * as Crypto from '@cardano-sdk/crypto';
export { Crypto };
import * as cjsBip32ed25519 from '@stricahq/bip32ed25519';
import { DataSignature, Data, NativeScript as NativeScript$1, PlutusScript, IMeshTxSerializer, DeserializedAddress, BuilderData, IDeserializer, IResolver, MeshTxBuilderBody, Protocol, UTxO, Asset, LanguageVersion } from '@meshsdk/common';
import { Buffer as Buffer$1 } from 'buffer';
import * as cjsCbors from '@stricahq/cbors';

declare const Slot: (value: number) => Cardano.Slot;
type Slot = Cardano.Slot;
declare const Value: typeof Serialization.Value;
type Value = Serialization.Value;
type TokenMap = Cardano.TokenMap;
declare const Transaction: typeof Serialization.Transaction;
type Transaction = Serialization.Transaction;
declare const TransactionId: {
    (value: string): Cardano.TransactionId;
    fromHexBlob(value: _cardano_sdk_util.HexBlob): Cardano.TransactionId;
    fromTxBodyCbor(bodyCbor: _cardano_sdk_core.TxBodyCBOR): Cardano.TransactionId;
};
type TransactionId = Cardano.TransactionId;
declare const TransactionBody: typeof Serialization.TransactionBody;
type TransactionBody = Serialization.TransactionBody;
declare const TransactionWitnessSet: typeof Serialization.TransactionWitnessSet;
type TransactionWitnessSet = Serialization.TransactionWitnessSet;
declare const TransactionUnspentOutput: typeof Serialization.TransactionUnspentOutput;
type TransactionUnspentOutput = Serialization.TransactionUnspentOutput;
declare const TransactionInput: typeof Serialization.TransactionInput;
type TransactionInput = Serialization.TransactionInput;
declare const TransactionOutput: typeof Serialization.TransactionOutput;
type TransactionOutput = Serialization.TransactionOutput;
type TransactionInputSet = Serialization.CborSet<ReturnType<TransactionInput["toCore"]>, TransactionInput>;
type TransactionWitnessPlutusData = Set<PlutusData>;
declare const PlutusData: typeof Serialization.PlutusData;
type PlutusData = Serialization.PlutusData;
declare const PlutusList: typeof Serialization.PlutusList;
type PlutusList = Serialization.PlutusList;
declare const PlutusMap: typeof Serialization.PlutusMap;
type PlutusMap = Serialization.PlutusMap;
declare const Redeemers: typeof Serialization.Redeemers;
type Redeemers = Serialization.Redeemers;
declare const Redeemer: typeof Serialization.Redeemer;
type Redeemer = Serialization.Redeemer;
declare const RedeemerPurpose: typeof Cardano.RedeemerPurpose;
type RedeemerPurpose = Cardano.RedeemerPurpose;
declare const RedeemerTag: typeof Serialization.RedeemerTag;
type RedeemerTag = Serialization.RedeemerTag;
declare const Script: typeof Serialization.Script;
type Script = Serialization.Script;
declare const PolicyId: (value: string) => Cardano.PolicyId;
type PolicyId = Cardano.PolicyId;
declare const AssetName: {
    (value: string): Cardano.AssetName;
    toUTF8(assetName: Cardano.AssetName, stripInvisibleCharacters?: boolean): string;
};
type AssetName = Cardano.AssetName;
declare const AssetId: {
    (value: string): Cardano.AssetId;
    getPolicyId(id: Cardano.AssetId): Cardano.PolicyId;
    getAssetName(id: Cardano.AssetId): Cardano.AssetName;
    fromParts(policyId: Cardano.PolicyId, assetName: Cardano.AssetName): Cardano.AssetId;
    getAssetNameAsText(id: Cardano.AssetId): string;
};
type AssetId = Cardano.AssetId;
declare const ScriptHash: {
    (value: string): Crypto.Hash28ByteBase16;
    fromEd25519KeyHashHex(value: Crypto.Ed25519KeyHashHex): Crypto.Hash28ByteBase16;
};
type ScriptHash = Crypto.Hash28ByteBase16;
declare const Address: typeof Cardano.Address;
type Address = Cardano.Address;
declare const RewardAddress: typeof Cardano.RewardAddress;
type RewardAddress = Cardano.RewardAddress;
declare const AddressType: typeof Cardano.AddressType;
type AddressType = Cardano.AddressType;
declare const BaseAddress: typeof Cardano.BaseAddress;
type BaseAddress = Cardano.BaseAddress;
declare const EnterpriseAddress: typeof Cardano.EnterpriseAddress;
type EnterpriseAddress = Cardano.EnterpriseAddress;
declare const PaymentAddress: (value: string) => Cardano.PaymentAddress;
type PaymentAddress = Cardano.PaymentAddress;
declare const AssetFingerprint: {
    (value: string): Cardano.AssetFingerprint;
    fromParts(policyId: Cardano.PolicyId, assetName: Cardano.AssetName): Cardano.AssetFingerprint;
};
type AssetFingerprint = Cardano.AssetFingerprint;
declare const Credential: typeof Serialization.Credential;
type Credential = Serialization.Credential;
type CredentialCore = Cardano.Credential;
declare const Ed25519PublicKeyHex: (value: string) => Crypto.Ed25519PublicKeyHex;
type Ed25519PublicKeyHex = Crypto.Ed25519PublicKeyHex;
type Ed25519PrivateNormalKeyHex = OpaqueString<"Ed25519PrivateKeyHex">;
declare const Ed25519PrivateNormalKeyHex: (value: string) => Ed25519PrivateNormalKeyHex;
type Ed25519PrivateExtendedKeyHex = OpaqueString<"Ed25519PrivateKeyHex">;
declare const Ed25519PrivateExtendedKeyHex: (value: string) => Ed25519PrivateExtendedKeyHex;
declare const Ed25519KeyHash: typeof Crypto.Ed25519KeyHash;
type Ed25519KeyHash = Crypto.Ed25519KeyHash;
declare const Ed25519KeyHashHex: (value: string) => Crypto.Ed25519KeyHashHex;
type Ed25519KeyHashHex = Crypto.Ed25519KeyHashHex;
declare const Hash28ByteBase16: {
    (value: string): Crypto.Hash28ByteBase16;
    fromEd25519KeyHashHex(value: Crypto.Ed25519KeyHashHex): Crypto.Hash28ByteBase16;
};
type Hash28ByteBase16 = Crypto.Hash28ByteBase16;
declare const Hash32ByteBase16: {
    (value: string): Crypto.Hash32ByteBase16;
    fromHexBlob<T>(value: _cardano_sdk_util.HexBlob): T;
};
type Hash32ByteBase16 = Crypto.Hash32ByteBase16;
declare const CredentialType: typeof Cardano.CredentialType;
type CredentialType = Cardano.CredentialType;
declare const Certificate: typeof Serialization.Certificate;
type Certificate = Serialization.Certificate;
declare const PoolId: {
    (value: string): Cardano.PoolId;
    fromKeyHash(value: Crypto.Ed25519KeyHashHex): Cardano.PoolId;
    toKeyHash(poolId: Cardano.PoolId): Crypto.Ed25519KeyHashHex;
};
type PoolId = Cardano.PoolId;
declare const StakeRegistration: typeof Serialization.StakeRegistration;
type StakeRegistration = Serialization.StakeRegistration;
declare const StakeDelegation: typeof Serialization.StakeDelegation;
type StakeDelegation = Serialization.StakeDelegation;
type StakeDelegationCertificate = Cardano.StakeDelegationCertificate;
declare const CertificateType: typeof Cardano.CertificateType;
type CertificateType = Cardano.CertificateType;
declare const VkeyWitness: typeof Serialization.VkeyWitness;
type VkeyWitness = Serialization.VkeyWitness;
declare const Ed25519SignatureHex: (value: string) => Crypto.Ed25519SignatureHex;
type Ed25519SignatureHex = Crypto.Ed25519SignatureHex;
declare const Ed25519PublicKey: typeof Crypto.Ed25519PublicKey;
type Ed25519PublicKey = Crypto.Ed25519PublicKey;
declare const Ed25519Signature: typeof Crypto.Ed25519Signature;
type Ed25519Signature = Crypto.Ed25519Signature;
declare const Bip32PrivateKey: typeof Crypto.Bip32PrivateKey;
type Bip32PrivateKey = Crypto.Bip32PrivateKey;
declare const Bip32PrivateKeyHex: (key: string) => Crypto.Bip32PrivateKeyHex;
type Bip32PrivateKeyHex = Crypto.Bip32PrivateKeyHex;
declare const PlutusLanguageVersion: typeof Cardano.PlutusLanguageVersion;
type PlutusLanguageVersion = Cardano.PlutusLanguageVersion;
declare const NativeScript: typeof Serialization.NativeScript;
type NativeScript = Serialization.NativeScript;
declare const PlutusV1Script: typeof Serialization.PlutusV1Script;
type PlutusV1Script = Serialization.PlutusV1Script;
declare const PlutusV2Script: typeof Serialization.PlutusV2Script;
type PlutusV2Script = Serialization.PlutusV2Script;
declare const PlutusV3Script: typeof Serialization.PlutusV3Script;
type PlutusV3Script = Serialization.PlutusV3Script;
declare const Costmdls: typeof Serialization.Costmdls;
type Costmdls = Serialization.Costmdls;
declare const CostModel: typeof Serialization.CostModel;
type CostModel = Serialization.CostModel;
declare const CborWriter: typeof Serialization.CborWriter;
type CborWriter = Serialization.CborWriter;
declare const ConstrPlutusData: typeof Serialization.ConstrPlutusData;
type ConstrPlutusData = Serialization.ConstrPlutusData;
declare const RewardAccount: {
    (value: string): Cardano.RewardAccount;
    toHash(rewardAccount: Cardano.RewardAccount): Crypto.Ed25519KeyHashHex;
    fromCredential(credential: Cardano.Credential, networkId: Cardano.NetworkId): Cardano.RewardAccount;
    toNetworkId(rewardAccount: Cardano.RewardAccount): Cardano.NetworkId;
};
type RewardAccount = Cardano.RewardAccount;
declare const Hash: typeof Serialization.Hash;
type Hash<T extends string> = Serialization.Hash<T>;
declare const DatumHash: {
    (value: string): Crypto.Hash32ByteBase16;
    fromHexBlob<T>(value: _cardano_sdk_util.HexBlob): T;
};
type DatumHash = Crypto.Hash32ByteBase16;
declare const Datum: typeof Serialization.Datum;
type Datum = PlutusData | DatumHash;
type CostModels = Cardano.CostModels;
type ExUnits = Serialization.ExUnits;
declare const ExUnits: typeof Serialization.ExUnits;
declare const NetworkId: typeof Cardano.NetworkId;
type NetworkId = Cardano.ChainId["networkId"];
declare const DatumKind: typeof Serialization.DatumKind;
declare const CborSet: typeof Serialization.CborSet;
type Witness = Cardano.Witness;
type Signatures = Cardano.Signatures;
type RequireAllOf = Cardano.NativeScriptKind.RequireAllOf;
declare const RequireAllOf = Cardano.NativeScriptKind.RequireAllOf;
type RequireAnyOf = Cardano.NativeScriptKind.RequireAnyOf;
declare const RequireAnyOf = Cardano.NativeScriptKind.RequireAnyOf;
type RequireNOf = Cardano.NativeScriptKind.RequireNOf;
declare const RequireNOf = Cardano.NativeScriptKind.RequireNOf;
type RequireSignature = Cardano.NativeScriptKind.RequireSignature;
declare const RequireSignature = Cardano.NativeScriptKind.RequireSignature;
type RequireTimeAfter = Cardano.NativeScriptKind.RequireTimeAfter;
declare const RequireTimeAfter = Cardano.NativeScriptKind.RequireTimeAfter;
type RequireTimeBefore = Cardano.NativeScriptKind.RequireTimeBefore;
declare const RequireTimeBefore = Cardano.NativeScriptKind.RequireTimeBefore;
type VrfVkBech32 = Cardano.VrfVkBech32;
declare const VrfVkBech32: {
    (value: string): Cardano.VrfVkBech32;
    fromHex(value: string): Cardano.VrfVkBech32;
};
type ScriptPubkey = Serialization.ScriptPubkey;
declare const ScriptPubkey: typeof Serialization.ScriptPubkey;
type DRepID = Cardano.DRepID;
declare const DRepID: {
    (value: string): Cardano.DRepID;
    isValid(value: string): boolean;
    canSign(value: string): boolean;
};
type DRep = Serialization.DRep;
declare const DRep: typeof Serialization.DRep;
type StakeCredentialStatus = Cardano.StakeCredentialStatus;
declare const StakeCredentialStatus: typeof Cardano.StakeCredentialStatus;

type Signer = {
    address: Address;
    key: StricaPrivateKey;
};

declare const checkSignature: (data: string, { key, signature }: DataSignature) => boolean;

declare class CoseSign1 {
    private protectedMap;
    private unProtectedMap;
    private payload;
    private signature;
    constructor(payload: {
        protectedMap: Map<any, any>;
        unProtectedMap: Map<any, any>;
        payload: Buffer$1 | null;
        signature?: Buffer$1;
    });
    static fromCbor(cbor: string): CoseSign1;
    createSigStructure(externalAad?: Buffer$1): Buffer$1;
    buildMessage(signature: Buffer$1): Buffer$1;
    verifySignature({ externalAad, publicKeyBuffer, }?: {
        externalAad?: Buffer$1;
        publicKeyBuffer?: Buffer$1;
    }): boolean;
    hashPayload(): void;
    getAddress(): Buffer$1;
    getPublicKey(): Buffer$1;
    getSignature(): Buffer$1 | undefined;
    getPayload(): Buffer$1 | null;
}
declare const getPublicKeyFromCoseKey: (cbor: string) => Buffer$1;
declare const getCoseKeyFromPublicKey: (cbor: string) => Buffer$1;

declare const generateNonce: (label?: string, length?: number) => string;

declare const signData: (data: string, signer: Signer) => DataSignature;

declare const resolveDataHash: (data: Data) => string;
declare const resolveNativeScriptAddress: (script: NativeScript$1, networkId?: number) => Cardano.PaymentAddress | Cardano.RewardAccount;
declare const resolveNativeScriptHash: (script: NativeScript$1) => string;
declare const resolvePaymentKeyHash: (bech32: string) => string;
declare const resolvePlutusScriptAddress: (script: PlutusScript, networkId?: number) => Cardano.PaymentAddress | Cardano.RewardAccount;
declare const resolvePlutusScriptHash: (bech32: string) => string;
declare const resolvePoolId: (hash: string) => string;
declare const resolvePrivateKey: (words: string[]) => string;
declare const resolveScriptRef: (script: PlutusScript | NativeScript$1) => string;
declare const resolveRewardAddress: (bech32: string) => Cardano.PaymentAddress | Cardano.RewardAccount;
declare const resolveStakeKeyHash: (bech32: string) => string;
declare const resolveTxHash: (txHex: string) => Cardano.TransactionId;

declare class CardanoSDKSerializer implements IMeshTxSerializer {
    verbose: boolean;
    private txBody;
    private txWitnessSet;
    private utxoContext;
    private redeemerContext;
    private scriptsProvided;
    private datumsProvided;
    private usedLanguages;
    constructor(verbose?: boolean);
    serializeRewardAddress(stakeKeyHash: string, isScriptHash?: boolean, network_id?: 0 | 1): string;
    serializePoolId(hash: string): string;
    serializeAddress(address: DeserializedAddress, networkId?: 0 | 1): string;
    serializeData(data: BuilderData): string;
    deserializer: IDeserializer;
    resolver: IResolver;
    serializeTxBody: (txBuilderBody: MeshTxBuilderBody, protocolParams: Protocol) => string;
    addSigningKeys: (txHex: string, signingKeys: string[]) => string;
    private addAllInputs;
    private addTxIn;
    private addScriptTxIn;
    private addSimpleScriptTxIn;
    private addAllOutputs;
    private addOutput;
    private addAllReferenceInputs;
    private addReferenceIput;
    private addAllMints;
    private addMint;
    private addAllCollateralInputs;
    private addCollateralInput;
    private setValidityInterval;
    private buildWitnessSet;
    private balanceTx;
    private createDummyTx;
}

type StricaPrivateKey = cjsBip32ed25519.PrivateKey;
declare const StricaPrivateKey: typeof cjsBip32ed25519.PrivateKey;
type StricaPublicKey = cjsBip32ed25519.PublicKey;
declare const StricaPublicKey: typeof cjsBip32ed25519.PublicKey;
type StricaBip32PrivateKey = cjsBip32ed25519.Bip32PrivateKey;
declare const StricaBip32PrivateKey: typeof cjsBip32ed25519.Bip32PrivateKey;
type StricaBip32PublicKey = cjsBip32ed25519.Bip32PublicKey;
declare const StricaBip32PublicKey: typeof cjsBip32ed25519.Bip32PublicKey;

declare const StricaEncoder: {
    encode: (input: any, options?: {
        collapseBigNumber: Boolean;
    }) => Buffer;
};
declare const StricaDecoder: typeof cjsCbors.Decoder;
type StricaDecoder = cjsCbors.Decoder;

declare const buildBaseAddress: (networkId: number, paymentKeyHash: Hash28ByteBase16, stakeKeyHash: Hash28ByteBase16) => BaseAddress;
declare const buildEnterpriseAddress: (networkId: number, paymentKeyHash: Hash28ByteBase16) => EnterpriseAddress;
declare const buildBip32PrivateKey: (entropy: string, password?: string) => Bip32PrivateKey;
declare const buildRewardAddress: (networkId: number, stakeKeyHash: Hash28ByteBase16) => RewardAddress;
declare const buildKeys: (entropy: string | [string, string], accountIndex: number, keyIndex?: number) => {
    paymentKey: StricaPrivateKey;
    stakeKey: StricaPrivateKey;
    dRepKey?: StricaPrivateKey;
};
declare const buildScriptPubkey: (keyHash: Ed25519KeyHash) => NativeScript;
declare const buildDRepID: (dRepKey: Ed25519PublicKeyHex, networkId?: NetworkId, addressType?: AddressType) => DRepID;

declare const toAddress: (bech32: string) => Address;
declare const toBaseAddress: (bech32: string) => BaseAddress | undefined;
declare const toEnterpriseAddress: (bech32: string) => EnterpriseAddress | undefined;
declare const toRewardAddress: (bech32: string) => RewardAddress | undefined;
declare const fromTxUnspentOutput: (txUnspentOutput: TransactionUnspentOutput) => UTxO;
declare const toTxUnspentOutput: (utxo: UTxO) => Serialization.TransactionUnspentOutput;
declare const addressToBech32: (address: Address) => string;
declare const fromValue: (value: Value) => Asset[];
declare const toScriptRef: (script: PlutusScript | NativeScript$1) => Script;
declare const fromScriptRef: (scriptRef: string) => PlutusScript | NativeScript$1 | undefined;
declare const fromNativeScript: (script: NativeScript) => NativeScript$1;
declare const toNativeScript: (script: NativeScript$1) => Serialization.NativeScript;
declare const toPlutusData: (data: Data) => PlutusData;
declare const toValue: (assets: Asset[]) => Serialization.Value;

declare const deserializeAddress: (address: string) => Address;
declare const deserializeEd25519KeyHash: (ed25519KeyHash: string) => Crypto.Ed25519KeyHash;
declare const deserializeDataHash: (dataHash: string) => DatumHash;
declare const deserializePlutusData: (plutusData: string) => PlutusData;
declare const deserializePlutusScript: (plutusScript: string, version: LanguageVersion) => PlutusV1Script | PlutusV2Script | PlutusV3Script;
declare const deserializeNativeScript: (nativeScript: string) => NativeScript;
declare const deserializeScriptHash: (scriptHash: string) => Crypto.Hash28ByteBase16;
declare const deserializeScriptRef: (scriptRef: string) => Script;
declare const deserializeTxUnspentOutput: (txUnspentOutput: string) => TransactionUnspentOutput;
declare const deserializeValue: (value: string) => Value;
declare const deserializeTx: (tx: string) => Transaction;
declare const deserializeTxHash: (txHash: string) => TransactionId;

declare function mergeValue(a: Value, b: Value): Value;
declare function negateValue(v: Value): Value;
declare function subValue(a: Value, b: Value): Value;
declare function negatives(v: Value): Value;
declare function assetTypes(v: Value): number;
declare function empty(v: Value): boolean;

export { Address, AddressType, AssetFingerprint, AssetId, AssetName, BaseAddress, Bip32PrivateKey, Bip32PrivateKeyHex, CardanoSDKSerializer, CborSet, CborWriter, Certificate, CertificateType, ConstrPlutusData, CoseSign1, CostModel, type CostModels, Costmdls, Credential, type CredentialCore, CredentialType, DRep, DRepID, Datum, DatumHash, DatumKind, Ed25519KeyHash, Ed25519KeyHashHex, Ed25519PrivateExtendedKeyHex, Ed25519PrivateNormalKeyHex, Ed25519PublicKey, Ed25519PublicKeyHex, Ed25519Signature, Ed25519SignatureHex, EnterpriseAddress, ExUnits, Hash, Hash28ByteBase16, Hash32ByteBase16, NativeScript, NetworkId, PaymentAddress, PlutusData, PlutusLanguageVersion, PlutusList, PlutusMap, PlutusV1Script, PlutusV2Script, PlutusV3Script, PolicyId, PoolId, Redeemer, RedeemerPurpose, RedeemerTag, Redeemers, RequireAllOf, RequireAnyOf, RequireNOf, RequireSignature, RequireTimeAfter, RequireTimeBefore, RewardAccount, RewardAddress, Script, ScriptHash, ScriptPubkey, type Signatures, type Signer, Slot, StakeCredentialStatus, StakeDelegation, type StakeDelegationCertificate, StakeRegistration, StricaBip32PrivateKey, StricaBip32PrivateKey as StricaBip32PrivateKeyType, StricaBip32PublicKey, StricaBip32PublicKey as StricaBip32PublicKeyType, StricaDecoder, StricaEncoder, StricaPrivateKey, StricaPrivateKey as StricaPrivateKeyType, StricaPublicKey, StricaPublicKey as StricaPublicKeyType, type TokenMap, Transaction, TransactionBody, TransactionId, TransactionInput, type TransactionInputSet, TransactionOutput, TransactionUnspentOutput, type TransactionWitnessPlutusData, TransactionWitnessSet, Value, VkeyWitness, VrfVkBech32, type Witness, addressToBech32, assetTypes, buildBaseAddress, buildBip32PrivateKey, buildDRepID, buildEnterpriseAddress, buildKeys, buildRewardAddress, buildScriptPubkey, checkSignature, deserializeAddress, deserializeDataHash, deserializeEd25519KeyHash, deserializeNativeScript, deserializePlutusData, deserializePlutusScript, deserializeScriptHash, deserializeScriptRef, deserializeTx, deserializeTxHash, deserializeTxUnspentOutput, deserializeValue, empty, fromNativeScript, fromScriptRef, fromTxUnspentOutput, fromValue, generateNonce, getCoseKeyFromPublicKey, getPublicKeyFromCoseKey, mergeValue, negateValue, negatives, resolveDataHash, resolveNativeScriptAddress, resolveNativeScriptHash, resolvePaymentKeyHash, resolvePlutusScriptAddress, resolvePlutusScriptHash, resolvePoolId, resolvePrivateKey, resolveRewardAddress, resolveScriptRef, resolveStakeKeyHash, resolveTxHash, signData, subValue, toAddress, toBaseAddress, toEnterpriseAddress, toNativeScript, toPlutusData, toRewardAddress, toScriptRef, toTxUnspentOutput, toValue };
